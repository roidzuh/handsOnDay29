import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
  const [menus, setMenus] = useState([]);

  const getMenuData = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((res) => setMenus(res.data.data.Data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMenuData();
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.title}>Menu Page</h1>
      <div className={styles.menuList}>
        {menus.map((item) => (
          <div key={item.id} className={styles.menuItem}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <img
              className={styles.menuImage}
              src={item.imageUrl}
              alt={item.name}
            />
            <Link to={`/menu/${item.id}`}>
              <button className={styles.button}>Detail</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
