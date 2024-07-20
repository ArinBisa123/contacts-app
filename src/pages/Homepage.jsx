import ContactList from "../components/ContactList";
import { deleteContact, getContacts } from "../utils/data";
import React from "react";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";

function HomepageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
  return (
    <Homepage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getContacts(),
      keyword: props.defaultKeyword || "",
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.keywordChangeHandler = this.keywordChangeHandler.bind(this);
  }
  onDeleteHandler(id) {
    deleteContact(id);
    // update contact state
    this.setState(() => {
      return {
        contacts: getContacts(),
      };
    });
  }
  keywordChangeHandler(keyword) {
    this.setState(() => {
      return { keyword };
    });
    this.props.keywordChange(keyword);
  }
  render() {
    const contacts = this.state.contacts.filter((contact) => {
      return contact.name
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
    return (
      <section>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.keywordChangeHandler}
        ></SearchBar>
        <h2>Daftar Kontak</h2>
        <ContactList contacts={contacts} onDelete={this.onDeleteHandler} />
      </section>
    );
  }
}

export default HomepageWrapper;
