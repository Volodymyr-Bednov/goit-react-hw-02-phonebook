import { Component } from 'react';
import { Section } from './Section/Section';
import { FormContact } from './FormContact/FormContact';
import { ListContacts } from './ListContacts/ListContacts';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  addContactHandler = evt => {
    evt.preventDefault();
    console.dir(evt.target.elements);
    const { name, tel } = evt.target.elements;
    console.log(name.value);
    this.setState(list => {
      console.log(list.contacts);
      return {
        contacts: [...list.contacts, { name: name.value }],
      };
    });
  };
  render() {
    return (
      <div>
        <Section
          title={'Phoneboock'}
          children={
            <FormContact
              onAddContactHandler={this.addContactHandler}
              name={this.state.name}
            />
          }
        />
        <Section title={'Contacts'} children={<ListContacts />} />
        <ListContacts />
      </div>
    );
  }
}
