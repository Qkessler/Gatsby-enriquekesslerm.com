import { Box, Text, Link } from 'theme-ui'

export const timelineEvents = [
  {
    year: 2021,
    events: [
      {
        headline: 'SDE Internship at Amazon 💻',
        info: 'After a long selection process, I was extremely proud of being selected.'
      },
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
      { headline: '', info: "this is the info for the 2020 event" },
      { headline: '', info: "this is the second event for 2020" },
    ],
  },
]
