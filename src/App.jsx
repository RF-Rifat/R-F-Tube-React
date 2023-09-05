import React, { useState, useEffect } from "react";
import Navbar from "./Components/navbar";
import CardBtn from "./Components/cardBtn";
import Card from "./Components/Card";

export const App = () => {
  const [categories, setCategories] = useState([]);
  const [cardDetails, setCardDetails] = useState([]);
  const [sortClicked, setSortClicked] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://openapi.programming-hero.com/api/videos/categories"
        );
        const data = await res.json();
        const content = data.data;
        setCategories(content);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  const cardBtnClick = (categoryId) => {
    loadCardData(categoryId);
  };

  async function loadCardData(id) {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/videos/category/${id}`
    );
    const data = await res.json();
    const content = data.data;
    if (sortClicked) {
      const sortedContent = content.sort((a, b) => {
        const viewsA = parseInt(a.others.views);
        const viewsB = parseInt(b.others.views);
        return viewsB - viewsA;
      });
      setCardDetails(sortedContent);
    } else {
      setCardDetails(content);
    }
  }
  const handleSortByView = () => {
    setSortClicked(true);
    cardBtnClick(); 
  };
  return (
    <>
      <Navbar prop={handleSortByView}></Navbar>
      <CardBtn myProp={categories} onBtnClick={cardBtnClick}></CardBtn>
      <Card prop={cardDetails}></Card>
    </>
  );
};

export default App;
