import { Col } from "react-bootstrap";
import Image from "next/image";

interface CardProps {
  title?: string;
  // description?: string;
  description?: any;
  imageSrc: any;
  imageAlt: string;
  list?: string[];
  totalCards: number;
  listTitle?: string;
}

export default function CardComponent({
  title,
  description,
  imageSrc,
  imageAlt,
  list,
  totalCards,
  listTitle,
}: CardProps) {
  const colProps =
    totalCards === 4
      ? { xs: 12, md: 6, lg: 6, xl: 3 }
      : totalCards === 3
      ? { xs: 12, md: 4, lg: 4 }
      : totalCards === 2
      ? { xs: 12, md: 12, lg: 6 }
      : { xs: 12, md: 6, lg: 6 };

  return (
    <Col {...colProps} className="mb-4 pe-xl-5">
      {/* <div className="image-wrapper"> */}
      <div className="text-center text-lg-start">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={80}
          height={80}
          quality={100}
          className="img-fluid rounded-3 mt-5 mb-2"
          // style={{ objectFit: "cover" }}
        />
      </div>
      {/* </div> */}

      <div className="text-center text-lg-start ps-xl-1 mt-3">
        <h3 className="font-bold">{title}</h3>
        {description && (
          <p
            style={{ fontSize: "22px" }}
            className="text-center text-lg-start pe-lg-5 pe-xl-0"
          >
            {description}
          </p>
        )}
        {Array.isArray(list) && list.length > 0 && (
          <>
            <h1 className="text-start font-bold">{listTitle}</h1>
            <ol
              className="order-list mt-3"
              style={{ paddingLeft: 15, marginLeft: 0 }}
            >
              {list.map((item, i) => (
                <li
                  style={{ color: "#55585D", fontSize: "19px" }}
                  key={i}
                  className="text-start order-list-item px-3"
                >
                  {item}
                </li>
              ))}
            </ol>
          </>
        )}
      </div>
    </Col>
  );
}
