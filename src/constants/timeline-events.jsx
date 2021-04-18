import { Box, Text, Link, Flex } from 'theme-ui'
import { GrAmazon } from 'react-icons/gr'
import { RiVirusLine } from 'react-icons/ri'

const amazon = {
  headline: 'SDE Internship at Amazon 💻',
  info: 'After a long selection process, I was extremely proud of being selected.'
}

const HeadlineLogo = ({ text, children }) => (
  <Flex>
    <Text mr={1}>{text}</Text>
    <Box pt={1}>
      {children}
    </Box>
  </Flex>
) 

export const timelineEvents = [
  {
    year: 2021,
    events: [
      {
        headline: 'First conference 🎙',
        info: (
          <Box>
            <Text>
              I gave my first conference with two other FAANG interns about the preparation
              for technical and behavioural interviews. 8 people attended! You can find the slides
              <Link href='https://docs.google.com/presentation/d/1ePvnOXaHroRyloEiB2ZrbaA8sxmsf79MchFVg-VKe1Y/edit?usp=sharing'> here</Link>.
            </Text>
          </Box>
        )
      }
    ]
  },
  {
    year: 2020,
    events: [
      {
        headline: (
          <HeadlineLogo text='Hired as an SDE Intern at Amazon'>
            <GrAmazon />
          </HeadlineLogo>
        ),
        info: 'After a long selection process, I was extremely proud of being selected.',
      },
      {
        headline: (
          <HeadlineLogo text='Covid hit in Spain for the first time'>
            <RiVirusLine />
          </HeadlineLogo>
        ),
        info: 'Around March we had the first Covid cases in Spain, and stayed ' +
          'home for a month and a half.',
      },
    ],
  },
]
