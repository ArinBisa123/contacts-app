import { addContact } from "../utils/data";
import ContactInput from "../components/ContactInput";
import { useNavigate } from "react-router-dom";

function addPage() {
  const navigate = useNavigate();
  function addContactHandler(contact) {
    addContact(contact);
    navigate("/");
  }
  return (
    <section>
      <h2>Tambah Kontak</h2>
      <ContactInput addContact={addContactHandler}></ContactInput>
    </section>
  );
}

export default addPage;
