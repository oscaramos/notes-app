import dayjs from 'dayjs'
import NotesColors from './NotesColors'

const headingsContent = `# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
`

const emphasisContent = `**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~
`

const listsContent = `Unordered

+ Create a list by starting a line with '+', '-', or '*'
+ Sub-lists are made by indenting 2 spaces:
- Marker character change forces new list start:
* Ac tristique libero volutpat at
+ Facilisis in pretium nisl aliquet
- Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as '1.'

Start numbering with offset:

57. foo
1. bar
`

const linksContent = `[link text](http://dev.nodeca.com)`

const InitialNotes = [
  {
    title: 'Headings',
    creationDate: dayjs("1 Aug", "DD MM").format("DD MMM"),
    content: headingsContent,
    backgroundColor: NotesColors[0]
  },
  {
    title: 'Emphasis',
    creationDate: dayjs("2 Aug", "DD MM").format("DD MMM"),
    content: emphasisContent,
    backgroundColor: NotesColors[1]
  },
  {
    title: 'Lists',
    creationDate: dayjs("3 Aug", "DD MM").format("DD MMM"),
    content: listsContent,
    backgroundColor: NotesColors[2]
  },
  {
    title: 'Links',
    creationDate: dayjs("4 Aug", "DD MM").format("DD MMM"),
    content: linksContent,
    backgroundColor: NotesColors[3]
  }
]

export default InitialNotes
