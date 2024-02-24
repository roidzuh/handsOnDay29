import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./MenuDetail.module.css";

const MenuDetail = () => {
  const [menu, setMenu] = useState({});

  // cara mendapatkan id pada url/parameter
  // const param=useParams()
  const { id } = useParams();

  const getMenuDetail = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${id}`)
      .then((res) => setMenu(res?.data?.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMenuDetail();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Menu Details</h1>
      <h2 className={styles.subtitle}>{menu?.name}</h2>
      <p className={styles.description}>{menu?.description}</p>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={menu?.imageUrl} alt={menu?.name} />
      </div>
      <h3 className={styles.type}>{menu?.type}</h3>
      <h4 className={styles.price}>{menu?.priceFormatted}</h4>
    </div>
  );
};

export default MenuDetail;
