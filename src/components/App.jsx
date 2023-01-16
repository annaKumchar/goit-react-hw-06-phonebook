import { Form } from './Form/Form';
import { Section } from './Section/Section';
import { PhonebookWrap } from './Section/Section.styled';
import { List } from './List/List';
import { Filter } from './Filter/Filter';

export function App() {
  return (
    <div>
      <PhonebookWrap>
        <Section title="Phonebook">
          <Form ></Form>
        </Section>
        <Section title="Contacts">
          <Filter/>
          <List ></List>
        </Section>
      </PhonebookWrap>
    </div>
  );

}
