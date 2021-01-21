import React, {useState} from 'react';
import Accordion from "./components/Accordion";
import Translate from "./components/Translate";
import Search from "./components/Search";
import DropdownList from "./components/DropdownList";
import Route from "./components/Route"
import Header from "./components/Header";

const items =[
    {
        title: 'what is react?',
        content: 'React is a front end javascript framework '
    },
    {
        title: 'why use react?',
        content: 'react is a favorite js library among engineers'
    },
    {
        title: 'how do you use react',
        content: 'you use react by creating components'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0])

    return (
        <div>
        <Header />
        <Route path="/">
            <Accordion items={items} />
        </Route>
        <Route path="/list">
            <Search />
        </Route>
        <Route path="/dropdown">
            <DropdownList
                label ="Select a color"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                />
        </Route>
        <Route path="/translate">
            <Translate />
        </Route>

    </div>
    );
};
