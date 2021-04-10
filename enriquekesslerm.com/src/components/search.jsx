/** @jsx jsx */

import { Component } from "react"
import { Index } from "elasticlunr"
import { Box, Input, Container, jsx } from "theme-ui"
import { GoSearch } from "react-icons/go"
import { IconContext } from "react-icons"

import PostList from "gatsby-theme-blorg/src/components/post-list"

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
      columns: 1,
      allPosts: props.allPosts,
    }
  }

  render() {
    return (
      <Container variant="content">
        <Box
          sx={{
            display: "flex",
            color: "text",
            opacity: 0.7,
            padding: "4px",
            WebkitBoxShadow: "0 1px 8px 1px rgba(0,0,0,0.4)",
            boxShadow: "0 1px 8px 1px rgba(0,0,0,0.4)",
            width: "100%",
            marginBottom: 4,
            borderRadius: 12,
          }}
        >
          <Input
            placeholder="Search articles"
            defaultValue={this.state.query}
            onChange={this.search}
            sx={{ outline: "none", border: "none", color: "text" }}
          />
          <IconContext.Provider
            value={{
              size: "1.2em",
              color: "text",
              style: {
                verticalAlign: "middle",
                margin: 5,
                marginTop: 10,
                marginRight: 7,
              },
            }}
          >
            <GoSearch />
          </IconContext.Provider>
        </Box>
        {!this.state.query.length && (
          <PostList posts={this.state.allPosts} columns={this.state.columns} />
        )}
        {this.state.results && (
          <PostList posts={this.state.results} columns={this.state.columns} />
        )}
      </Container>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = (evt) => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}
