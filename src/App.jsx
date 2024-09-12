import { useEffect, useState } from "react";
import "./App.scss";
import platform from "./assets/Platform.jpeg";

const App = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const classes = [
    {
      id: 1,
      name: "Platform",
      bgcolor: "#E6E7E9",
      contentbg: platform,
      content1: (
        <>
          Empowering youth visions
          <br /> with innovative media,
          <br /> our creative agency{" "}
          <span>
            crafts <br /> the future.
          </span>
        </>
      ),
      content2: "900K+",
      content2para: "Lorem ipsum dolor sit amet consectetur",
      content3: "50M+",
      content3para: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 2,
      name: "YouTube",
      bgcolor: "#E6E7E9",
      bgcoloractive: "red",
      contentbg: platform,
      content1: (
        <>
          Empowering youth visions
          <br /> with innovative media,
          <br /> our creative agency{" "}
          <span>
            crafts <br /> the future.
          </span>
        </>
      ),
      content2: "900K+",
      content2para: "Lorem ipsum dolor sit amet consectetur",
      content3: "50M+",
      content3para: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 3,
      name: "Instagram",
      bgcolor: "#D2D3D5",
      contentbg: platform,
      content1: (
        <>
          Empowering youth visions
          <br /> with innovative media,
          <br /> our creative agency{" "}
          <span>
            crafts <br /> the future.
          </span>
        </>
      ),
      content2: "900K+",
      content2para: "Lorem ipsum dolor sit amet consectetur",
      content3: "50M+",
      content3para: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 4,
      name: "TikTok",
      bgcolor: "#BCBDC1",
      contentbg: platform,
      content1: (
        <>
          Empowering youth visions
          <br /> with innovative media,
          <br /> our creative agency{" "}
          <span>
            crafts <br /> the future.
          </span>
        </>
      ),
      content2: "900K+",
      content2para: "Lorem ipsum dolor sit amet consectetur",
      content3: "50M+",
      content3para: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 5,
      name: "Article",
      bgcolor: "#949599",
      contentbg: platform,
      content1: (
        <>
          Empowering youth visions
          <br /> with innovative media,
          <br /> our creative agency{" "}
          <span>
            crafts <br /> the future.
          </span>
        </>
      ),
      content2: "900K+",
      content2para: "Lorem ipsum dolor sit amet consectetur",
      content3: "50M+",
      content3para: "Lorem ipsum dolor sit amet consectetur",
    },
  ];

  const classeslength = classes.length - 1;

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--classes-length",
      classeslength
    );

    const cards = document.querySelectorAll(".title");
    const container = document.querySelectorAll(".container");

    const handleCardClick = (index) => {
      if (index === currentCard) return;

      container[currentCard].classList.remove("active");
      container[index].classList.add("active");

      setCurrentCard(index);
    };

    cards.forEach((card, index) => {
      card.addEventListener("click", () => handleCardClick(index));
    });

    // Membersihkan event listeners saat unmount
    return () => {
      cards.forEach((card) => {
        card.removeEventListener("click", handleCardClick);
      });
    };
  }, [currentCard, classeslength]);

  return (
    <div className="categories">
      {classes.map((classes, index) => (
        <div key={index} className={`container ${index === 0 ? "active" : ""}`}>
          <div
            className={`${classes.name} title`}
            style={{
              backgroundColor:
                index === currentCard && classes.name === "YouTube"
                  ? classes.bgcoloractive
                  : classes.bgcolor,
            }}
          >
            <h1
              style={{
                color:
                  index === currentCard && classes.name === "YouTube"
                    ? "white"
                    : "black",
              }}
            >
              {classes.name}
            </h1>
          </div>
          <div className={`content`}>
            <img src={classes.contentbg} alt="" />
            <h1 className="content__title">{classes.content1}</h1>
            <div className="content__details">
              <div className="content__item">
                <h1>{classes.content2}</h1>
                <p>{classes.content2para}</p>
              </div>
              <div className="content__item">
                <h1>{classes.content3}</h1>
                <p>{classes.content3para}</p>
              </div>
              <button className="content__button">Let's Connect</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
