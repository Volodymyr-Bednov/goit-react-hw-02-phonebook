import { Component } from 'react';
import { Section } from './Section/Section';
import { FormContact } from './FormContact/FormContact';
import { ListContacts } from './ListContacts/ListContacts';
import { Firter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  addContactHandler = evt => {
    evt.preventDefault();
    const { name, number } = evt.target.elements;
    this.setState(list => {
      return {
        contacts: [
          ...list.contacts,
          { id: nanoid(), name: name.value, number: number.value },
        ],
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
              number={this.state.number}
            />
          }
        />
        <Section title={'Contacts'}>
          <Firter />
          <ListContacts dataList={this.state.contacts} />
        </Section>
      </div>
    );
  }
}
