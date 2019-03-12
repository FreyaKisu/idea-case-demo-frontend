import React, { Component } from "react";
//import { fetchTestCategories as oldOne } from '../../models/Test';
import { fetchAllCategories } from "../../actions/category";
import CategoryListItem from "./CategoryListItem";
import { connect } from "react-redux";

class CategoryListFiltered extends Component {
  /*
    constructor(props) {
      super(props);
      //this.state = { categories: [] };
    }
    */

  componentDidMount() {
    //this.setState({ categories: fetchTestCategories() });
    this.props.categoriesFetchAll();
  }

  render() {
    return (
      <div>
        <h4>Expensive Categories</h4>
        <ol>
          {this.props.categories.categoryList
            .filter(item => item.id > 700)
            .map(item => (
              <CategoryListItem key={item.id} item={item} />
            ))}
          )}
        </ol>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  categoriesFetchAll: () => {
    dispatch(fetchAllCategories());
  }
});

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryListFiltered);
