---
title: "Validation with Zod and TS"
date: "2024-02-02"
spoiler: "API Validation with Zod"
---

## Validation Layer with Typed Schemas for APIs and WebSockets

```
Zod provides typed schemas for validating data from APIs and WebSockets,
creating a secure layer that ensures only
compliant data is used within your application.
```

## Why Use Zod

- Data Validation: Data validating client-received data against expected schemas
- Reliability: ensuring data exchanged with APIs meets schema
- TypeScript-First: Designed for TypeScript, Runtime Type Safety
- Error Handling and Debugging
- Custom Validation Logic

[LINK - doc Zod]('https://zod.dev/?id=basic-usage')

## Zod and TS example:

```ts
import { z } from "zod";

const CustomerSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
});
//Convert Schema to TypeScript as Model
type CustomerModel = TypeOf<typeof CustomerSchema>;

const ShippingSchema = z.object({
  date: z.coerce.date(),
  trackingNumber: z.string(),
  company: z.string(),
});
//Convert Schema to TypeScript as Model
export type ShippingModel = TypeOf<typeof ShippingSchema>;

export const ShipOrderSchema = z.object({
  type: z.literal("ship"),
  id: z.number(),
  createdAt: z.coerce.date(),
  customer: CustomerSchema,
  date: z.coerce.date(),
  ship: ShippingSchema,
});

//Convert Schema to TypeScript as Model
export type ShipOrderModel = TypeOf<typeof ShipOrderSchema>;

export const OrderSchema = z.union([ShipOrderSchema]);

export const OrderArraySchema = z.array(OrderSchema);
```

```js
// Client Side - fetch
// making sure that data = type signature of ShipOrderModel
export default async function getOrders(): Promise<ShipOrderModel[]> {
  const response = await fetch(`${import.meta.env.BASE_URL}/api/orders.json`);
  const data: unknown = await response.json();
  return OrderArraySchema.parse(data);
}
```
