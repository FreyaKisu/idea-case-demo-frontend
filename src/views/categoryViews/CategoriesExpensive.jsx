import React, { Component } from "react";
import CategoryListFiltered from "../../components/categoryComponents/CategoryListFiltered";
import BackButton from "../../components/categoryComponents/BackButton";

export default class Categories extends Component {
  render() {
    return (
      <div>
        <CategoryListFiltered />

        <BackButton />
      </div>
    );
  }
}
