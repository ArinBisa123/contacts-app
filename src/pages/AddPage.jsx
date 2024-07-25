import { addContact } from "../utils/api";
import ContactInput from "../components/ContactInput";
import { useNavigate } from "react-router-dom";

function addPage() {
  const navigate = useNavigate();
  async function addContactHandler(contact) {
    await addContact(contact);
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
