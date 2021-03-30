import orga from 'orga-theme-ui-preset/lib/index'


export default {
  ...orga,
  links: {
    project: {
      color: 'text',
      textDecoration: 'none',
      transition: '0.3s',
      '&:hover': {
        color: 'secondary',
      }
    }
  }
  // styles: {
  //   root: {
  //     a: {
  //       color: 'primary',
  //       textDecoration: 'none',
  //       transition: '0.3s',
  //       '&:hover': {
  //               color: 'secondary',
  //       },
  //       project: {
  //         color: 'text',
  //       }
  //     }
  //   }
  // }
}
