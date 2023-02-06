import { Component } from 'react';
import { Section } from './Section/Section';
import { FormContact } from './FormContact/FormContact';
import { ListContacts } from './ListContacts/ListContacts';
import { Firter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  addContactHandler = evt => {
    evt.preventDefault();
    const { name, number } = evt.target.elements;
    const nameMatch = this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(name.value.toLowerCase())
    );
    if (nameMatch.length) return alert(`${name.value} is already in contacts`);
    this.setState(list => {
      return {
        contacts: [
          ...list.contacts,
          { id: nanoid(), name: name.value, number: number.value },
        ],
      };
    });
  };

  deleteContactHandler = evt => {
    console.dir(evt.target.dataset.id);
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(item => item.id !== evt.target.dataset.id),
      };
    });
  };

  filterChahge = evt => {
    this.setState({ filter: evt.target.value });
  };

  render() {
    const { filter, contacts } = this.state;
    const formatedtext = filter.toLowerCase();
    const filteredData = contacts.filter(item =>
      item.name.toLowerCase().includes(formatedtext)
    );
    return (
      <div className={css.wrap}>
        <Section
          title={'Phoneboock'}
          children={
            <FormContact
              onAddContactHandler={this.addContactHandler}
              // name={this.state.name}
              // number={this.state.number}
            />
          }
        />
        <Section title={'Contacts'}>
          <Firter onFilterChahge={this.filterChahge} valueFilter={filter} />
          <ListContacts
            dataList={filteredData}
            onDeleteContactHandler={this.deleteContactHandler}
          />
        </Section>
      </div>
    );
  }
}
