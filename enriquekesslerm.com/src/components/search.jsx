import React, { Component } from "react"
import { Index } from "elasticlunr"
// import { Link } from "gatsby"
import { Input } from 'theme-ui'

import PostList from 'gatsby-theme-blorg/src/components/post-list'

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
      columns: 1,
    }
  }

  render() {
    console.log(this.state.results)
    return (
      <div>
        <Input defaultValue={this.state.query} onChange={this.search} />
        <PostList posts={this.state.results} columns={this.state.columns}/>
      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
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
