import { useState, useEffect } from "react";

import "./AutoSuggestion.css";
const AutoSuggestion = () => {
  const [food, setFood] = useState("");
  const [shoppingList, setShoppingList] = useState([]);
  const [bucketList, setBucketList] = useState([]);

  /*const handleInputChange = (e) => {
    setFood(e.target.value);
  };

  const fetchItems = async (food) => {
    const url = `https://api.frontendeval.com/fake/food/${food}`;
    const result = await fetch(url);
    const data = await result.json();
    setShoppingList(data);
  };

  const handleItemClick = (e) => {
    const index = e.target.getAttribute("data-id");
    if (!isNaN(index)) {
      const obj = {
        id: Date.now(),
        data: shoppingList[index],
        isDone: false,
      };

      const copyBucket = [...bucketList];
      copyBucket.push(obj);
      setBucketList(copyBucket);
    }
    setFood("");
    console.log(e.target.getAttribute("data-id"));
  };
  console.log("bucketList => ", bucketList);

  const handleRightClick = (id) => {
    const copybucketList = [...bucketList];

    const newBucketList = copybucketList.map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }

      return item;
    });

    setBucketList(newBucketList);
  };

  const handleDelete = (id) => {
    const copybucketList = [...bucketList];
    const newList = copybucketList.filter((item) => item.id != id);
    setBucketList(newList);
  };

  useEffect(() => {
    if (food.length >= 2) fetchItems(food);
  }, [food]);*/

  const handleInputChange = (e) => {
    setFood(e.target.value);
    console.log(food);
  };

  const fetchItems = async (food) => {
    const url = `https://api.frontendeval.com/fake/food/${food}`;
    console.log(url);
    try {
      const result = await fetch(url);
      console.log(result);
      if (result.status === 200) {
        const data = await result?.json();
        setShoppingList(data);
      }
    } catch (err) {
      console.error("Error: ", err);
    }
  };
  // console.log(shoppingList);

  useEffect(() => {
    if (food.length >= 2) {
      //make an api call
      fetchItems(food);
    }
  }, [food]);

  const handleItemClick = (e) => {
    const idx = e.target.getAttribute("data-id");
    if (idx) {
      const obj = {
        id: Date.now(),
        data: shoppingList[idx],
        isDone: false,
      };
      const copyBucketList = [...bucketList];
      copyBucketList.push(obj);
      setBucketList(copyBucketList);
    }
    setFood("");
  };
  console.log(bucketList);

  const handleRightClick = (id) => {
    const copyBucketList = [...bucketList];
    const newBucketList = copyBucketList.map((item) => {
      if (item.id == id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setBucketList(newBucketList);
  };

  const handleDelete = (id) => {
    const copyBucketList = [...bucketList];
    const newList = copyBucketList.filter((item) => item.id != id);
    setBucketList(newList);
  };

  /* 1st approach : Handling events to avoid stale state*/
  // const handleActions = (e) => {
  //   const action = e.target.getAttribute("data-id");
  //   const [type, id] = action.split(":");
  //   console.log(type, id);
  //   if (type === "update") {
  //     handleRightClick(id);
  //   } else if (type === "delete") {
  //     handleDelete(id);
  //   }
  // };

  /* 2nd approach : Handling events to avoid stale state*/
  const handleAction = (action, id) => {
    if (action === "update") {
      handleRightClick(id);
    } else if (action === "delete") {
      handleDelete(id);
    }
  };
  return (
    <div className="container">
      <h1>My Shopping List</h1>
      <div className="input-container">
        <input
          className="input-box"
          value={food}
          onChange={handleInputChange}
        />
      </div>
      {food.length >= 2 ? (
        <div className="shopping-list" onClick={handleItemClick}>
          {shoppingList.map((item, index) => {
            return (
              <div data-id={index} className="product">
                {item}
              </div>
            );
          })}
        </div>
      ) : null}
      {/* 2nd approach : Handling events to avoid stale state*/}
      <div className="bucket-list">
        {bucketList.map((item) => {
          return (
            <div className="shopping-item">
              <button
                className="bucket-btn"
                onClick={() => handleAction("update", item.id)}
              >
                ✓
              </button>

              <div className={item.isDone ? "strike" : ""}>{item.data}</div>
              <button
                className="bucket-btn"
                onClick={() => handleAction("delete", item.id)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
      {/* bucket list */}
      {/* 1st approach : Handling events to avoid stale state*/}
      {/* <div className="bucket-list" onClick={handleActions}>
        {bucketList.map((item) => {
          return (
            <div className="shopping-item">
              <button
                data-id={`update:${item.id}`}
                //onClick={() => handleRightClick(item.id)}
              >
                ✓
              </button>
              <div className={item.isDone ? "strike" : ""}>{item.data}</div>
              <button
                data-id={`delete:${item.id}`}
                //onClick={() => handleDelete(item.id)}
              >
                X
              </button>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};
export default AutoSuggestion;
