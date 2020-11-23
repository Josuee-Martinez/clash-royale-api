import React from "react";
import silverChest from "../../assets/silverChest.png";
import goldenChest from "../../assets/goldenChest.png";
import giantChest from "../../assets/Giant_chest.png";
import epicChest from "../../assets/EpicChest.png";
import lightningChest from "../../assets/Lightning_Chest.png";
import magicalChest from "../../assets/MagicalChest.png";
import legendaryChest from "../../assets/LegendChest.png";
import megaLightningChest from "../../assets/MegaLightningChest.png";
import legendaryKingsChest from "../../assets/Legendary_Kings_Chest.png";

const ChestData = ({ chestData }) => {
   return (
      <div className="card mb-2">
         <button
            className="btn btn-dark"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
         >
            Chests
         </button>

         <div id="collapseThree" className="collapse">
            <div className="card-body">
               {chestData === null
                  ? ""
                  : chestData.items.map((chest, i) => (
                       <figure className="chest-img" key={i}>
                          <img
                             className="cover"
                             src={
                                chest.name === "Silver Chest"
                                   ? silverChest
                                   : chest.name === "Golden Chest"
                                   ? goldenChest
                                   : chest.name === "Giant Chest"
                                   ? giantChest
                                   : chest.name === "Epic Chest"
                                   ? epicChest
                                   : chest.name === "Lightning Chest"
                                   ? lightningChest
                                   : chest.name === "Magical Chest"
                                   ? magicalChest
                                   : chest.name === "Mega Lightning Chest"
                                   ? megaLightningChest
                                   : chest.name === "Legendary Chest"
                                   ? legendaryChest
                                   : chest.name === "Legendary King's Chest"
                                   ? legendaryKingsChest
                                   : ""
                             }
                          />
                       </figure>
                    ))}
            </div>
         </div>
      </div>
   );
};

export default ChestData;
