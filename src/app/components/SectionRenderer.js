export default function SectionRenderer({ section }) {
  if (section.type === "text") {
    return <p style={{ lineHeight: 1.6 }}>{section.content}</p>;
  }

  if (section.type === "quote") {
    return (
      <blockquote style={{ fontStyle: "italic", margin: "16px 0" }}>
        “{section.content}”
      </blockquote>
    );
  }

  if (section.type === "image") {
    return (
      <img
        src={section.src}
        alt=""
        style={{ maxWidth: "100%", margin: "16px 0" }}
      />
    );
  }

  return null;
}
