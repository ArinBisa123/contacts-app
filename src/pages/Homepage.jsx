import ContactList from "../components/ContactList";
// import { deleteContact } from "../utils/data";
import React from "react";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import { getContacts, deleteContact } from "../utils/api";
// import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";

function Homepage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [contacts, setContacts] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });
  const { locale } = React.useContext(LocaleContext);
  React.useEffect(() => {
    getContacts().then(({ data }) => {
      setContacts(data);
    });
  }, []);
  async function onDeleteHandler(id) {
    await deleteContact(id);
    // update contacts state
    const { data } = await getContacts();
    setContacts(data);
  }
  async function onKeywordHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }
  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(keyword.toLowerCase());
  });
  return (
    <section>
      <SearchBar keyword={keyword} keywordChange={onKeywordHandler}></SearchBar>
      <h2> {locale === "id" ? "Daftar Kontak" : "Contacts List"} </h2>
      <ContactList contacts={filteredContacts} onDelete={onDeleteHandler} />
    </section>
  );
}

export default Homepage;
