import { Col } from "react-bootstrap";
import Image from "next/image";

interface CardProps {
  title: string;
  // description?: string;
  description?: any;
  imageSrc: any;
  imageAlt: string;
  list?: string[];
  totalCards: number;
}

export default function CardComponent({
  title,
  description,
  imageSrc,
  imageAlt,
  list,
  totalCards,
}: CardProps) {
  const colProps =
    totalCards === 4
      ? { xs: 12, md: 6, lg: 6, xl: 3 }
      : totalCards === 3
      ? { xs: 12, md: 4, lg: 4 }
      : { xs: 12, md: 6, lg: 6 };
  return (
    <Col {...colProps} className="mb-4 pe-5">
      {/* <div className="image-wrapper"> */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={80}
        height={80}
        quality={100}
        className="img-fluid rounded-3 mt-5 mb-2"
        // style={{ objectFit: "cover" }}
      />
      {/* </div> */}

      <div className="text-center text-lg-start ps-xl-1 mt-3">
        <h3 className="font-bold">{title}</h3>
        {description && (
          <p style={{ fontSize: "22px" }} className="text-center text-lg-start">
            {description}
          </p>
        )}
        {Array.isArray(list) && list.length > 0 && (
          <ul style={{ paddingLeft: 15, marginLeft: 0 }}>
            {list.map((item, i) => (
              <li style={{ color: "#55585D" }} key={i} className="text-start">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Col>
  );
}
