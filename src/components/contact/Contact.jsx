import { FaPhone, FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./Contact.module.css";

export default function Contact({ data }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact({ id: data.id }));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.description}>
        <p className={styles.text}>
          <FaUser size={"1em"} /> {data.name}
        </p>
        <p className={styles.text}>
          <FaPhone size={"1em"} /> {data.number}
        </p>
      </div>

      <button className={styles.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
