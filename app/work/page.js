const list = [
  {
    title: "Product Web Application",
    location: "Vancouver",
    description: "",
    team: "",
    responsibilities: "Responsible for creating new features",
    achievements:
      "Completed the Three.js model, built a 360-degree visual model that represents the client's product. Users can test by selecting different options and see immediately in a 3D diagram the potential product they will receive.",
    learning:
      "Working closely with UX, creating wireframes and collaborating with stakeholders, I learned about User Experience and how to work with Three.js and building diagrams.",
  },
];

export default function Work() {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          <h3>{item.title}</h3>
          <p>
            <strong>Location:</strong> {item.location}
          </p>
          {item.description && (
            <p>
              <strong>Description:</strong> {item.description}
            </p>
          )}
          {item.team && (
            <p>
              <strong>Team:</strong> {item.team}
            </p>
          )}
          <p>
            <strong>Responsibilities:</strong> {item.responsibilities}
          </p>
          <p>
            <strong>Achievements:</strong> {item.achievements}
          </p>
          <p>
            <strong>Learning:</strong> {item.learning}
          </p>
        </li>
      ))}
    </ul>
  );
}
