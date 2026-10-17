import "./NewsBox.css";

interface NewsBoxProps {
  title: string;
  details: string;
  date: string;
  images: string[];
}

export default function NewsBox({
  title,
  details,
  date,
  images,
}: NewsBoxProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
  return (
    <article className="news-box">
      <div className="news-box-content">
       <span className="news-box-date">{formattedDate}</span>

        <h2>{title}</h2>

        <p>{details}</p>
      </div>

      {images.length > 0 && (
        <div className="news-box-images">
          {images.map((image, index) => (
            <div className="news-box-image" key={`${image}-${index}`}>
              <img
                src={image}
                alt={`${title} ${index + 1}`}
              />
            </div>
          ))}
        </div>
      )}
    </article>
  );
}