
import React from 'react';
import ReactDOM from 'react-dom'
//import If from 'components/If'
//import StoreItem from './StoreItem'
class App extends React.Component {
    constructor() {
        super()
        this.state = { name: '' }
        this.data = { "redeemable_items": [{ "locked": false, "item_tooltip": "Buy the World Cup card pack", "discount": { "percentage": 50, "original_points_required": 5000, "discounted_points_required": 2500 }, "item_name": "wc18_card_pack", "icon_url": "https://cdn-bgp.bluestacks.com/pika_world_cards/assets/card_pack_icons/wc18_card_pack.png", "item_type": "card_pack", "type": "currently_available", "buying_options": { "pika_points": { "points_required": 5000 } }, "item_id": "22", "item_display_name": "World Cup card pack", "size_required": false, "discount_given": 50, "item_description": "Accelerate your collection. Get 5 players instantly for your collection." }, { "locked": false, "item_tooltip": "Buy the World Cup Rare card pack", "item_name": "wc18_card_pack_rare", "icon_url": "https://cdn-bgp.bluestacks.com/pika_world_cards/assets/card_pack_icons/wc18_card_pack_rare.png", "item_type": "card_pack", "type": "currently_available", "buying_options": { "pika_points": { "points_required": 20000 } }, "item_id": "23", "item_display_name": "World Cup Rare card pack", "size_required": false, "item_description": "Too many commons? Spice up your tactics with some Rare Cards. Get the Rare Card Pack and add 8 players with a high chance of adding rare players to your team." }, { "locked": false, "item_tooltip": "Buy the World Cup Epic card pack", "item_name": "wc18_card_pack_epic", "icon_url": "https://cdn-bgp.bluestacks.com/pika_world_cards/assets/card_pack_icons/wc18_card_pack_epic.png", "item_type": "card_pack", "type": "currently_available", "buying_options": { "pika_points": { "points_required": 50000 } }, "item_id": "24", "item_display_name": "World Cup Epic card pack", "size_required": false, "item_description": "Love them or hate them, but you sure cannot ignore them. Buy the Epic Card Pack and add 5 players with a high chance of adding an epic player to your team." }, { "locked": false, "item_tooltip": "Redeem for One-month subscription", "item_name": "oneMonthSubscriptionName", "icon_url": "https://cdn-bgp.bluestacks.com/bluestacks_account/assets/pika_points_new/pika_trophy.png", "item_type": "subscription", "type": "currently_available", "buying_options": { "pika_points": { "points_required": 4000 } }, "item_id": "1", "item_display_name": "One-month subscription", "size_required": false, "item_description": "Redeem for One-month subscription" }, { "locked": false, "item_tooltip": "surya123", "item_name": "test", "icon_url": "https://cdn-bgp.bluestacks.com/bluestacks_account/assets/pika_points/pika_tw_raffle_ticket.png", "item_type": "shippable", "type": "currently_available", "buying_options": { "pika_points": { "points_required": 500000 } }, "item_id": "11", "item_display_name": "surya", "size_required": false, "shipping_item": true, "item_description": "surya12" }, { "locked": false, "item_tooltip": "Redeem for Gaming Headphones", "item_name": "Gaming Headphones", "icon_url": "http://cdn-bgp.bluestacks.com/bluestacks_account/assets/pika_points_new/gaming_headphones.png", "item_type": "shippable", "type": "currently_available", "buying_options": { "pika_points": { "points_required": 100000 }, "pika_points_usd_combo": { "points_required": 40000, "usd_required": 10 } }, "item_id": "13", "item_display_name": "Gaming Headphones", "size_required": false, "shipping_item": true, "item_description": "Redeem for Gaming Headphones" }, { "locked": false, "item_tooltip": "Redeem for Gaming Mouse", "discount": { "percentage": 33, "original_points_required": 50000, "discounted_points_required": 33500 }, "item_name": "Gaming Mouse", "icon_url": "http://cdn-bgp.bluestacks.com/bluestacks_account/assets/pika_points_new/gaming-mouse.png", "discount_given": 33, "item_type": "shippable", "type": "currently_available", "buying_options": { "pika_points": { "points_required": 50000 }, "pika_points_usd_combo": { "points_required": 20000, "usd_required": 7 } }, "item_id": "14", "item_display_name": "Gaming Mouse", "size_required": false, "shipping_item": true, "item_description": "Redeem for Gaming Mouse" }, { "locked": false, "item_tooltip": "Redeem for Gaming Keyboard", "item_name": "Gaming Keyboard", "icon_url": "http://cdn-bgp.bluestacks.com/bluestacks_account/assets/pika_points_new/gaming-keyboard.png", "item_type": "shippable", "type": "currently_available", "buying_options": { "pika_points": { "points_required": 250000 }, "pika_points_usd_combo": { "points_required": 100000, "usd_required": 20 } }, "item_id": "15", "item_display_name": "Gaming Keyboard", "size_required": false, "shipping_item": true, "item_description": "Redeem for Gaming Keyboard" }, { "locked": false, "item_tooltip": "Redeem for BlueStacks T-Shirt", "item_name": "bluestacksTshirtName", "icon_url": "https://cdn-bgp.bluestacks.com/bluestacks_account/assets/pika_points/pika_shirt.png", "item_type": "shippable", "type": "currently_available", "buying_options": { "pika_points_usd_combo": { "points_required": 3000, "usd_required": 4 } }, "item_id": "2", "item_display_name": "BlueStacks T-shirt", "size_required": false, "shipping_item": true, "item_description": "Redeem for BlueStacks T-Shirt" }, { "locked": false, "item_tooltip": "Redeem for gaming mouse", "item_name": "gamingMouseName", "icon_url": "https://cdn-bgp.bluestacks.com/bluestacks_account/assets/pika_points_new/pika_gaming_mouse.png", "item_type": "shippable", "type": "currently_available", "buying_options": { "pika_points": { "points_required": 50000 }, "pika_points_usd_combo": { "points_required": 10000, "usd_required": 4 } }, "item_id": "3", "item_display_name": "Gaming mouse", "size_required": false, "shipping_item": true, "item_description": "Redeem for gaming mouse" }, { "locked": false, "item_tooltip": "Redeem for Lineage2 T-Shirt", "item_name": "lineage2TshirtName", "icon_url": "https://cdn-bgp.bluestacks.com/bluestacks_account/assets/pika_points/pika_lineage_tshirt.png", "item_type": "shippable", "type": "currently_available", "buying_options": { "pika_points": { "points_required": 1000 }, "pika_points_usd_combo": { "points_required": 5000, "usd_required": 5 } }, "item_id": "4", "item_display_name": "Lineage2 T-shirt", "size_required": true, "shipping_item": true, "item_description": "Redeem for Lineage2 T-Shirt" }, { "locked": false, "item_tooltip": "Lineage2 skin for bluestacks", "item_name": "lineage2SkinName", "icon_url": "https://cdn-bgp.bluestacks.com/bluestacks_account/assets/pika_points/pika_lineage_skin.png", "item_type": "skin", "type": "coming_soon", "buying_options": { "pika_points": { "points_required": 30000 }, "pika_points_usd_combo": { "points_required": 10000, "usd_required": 10 } }, "item_id": "5", "item_display_name": "Lineage2 skin", "size_required": false, "item_description": "Lineage2 skin for bluestacks" }, { "locked": false, "item_tooltip": "Chance to win gaming mouse", "item_name": "gamingMouseRaffleTicketName", "icon_url": "https://cdn-bgp.bluestacks.com/bluestacks_account/assets/pika_points/pika_gaming_mouse_draw.png", "item_type": "raffle", "type": "currently_available", "buying_options": { "pika_points": { "points_required": 500 } }, "item_id": "6", "item_display_name": "Gaming mouse raffle", "size_required": false, "item_description": "Chance to win gaming mouse" }, { "locked": false, "item_tooltip": "Lineage 2 Revolution theme for BlueStacks", "item_name": "anime-lineage", "icon_url": "https://cdn-bgp.bluestacks.com/bluestacks_account/assets/pika_points/pika_lineage_skin.png", "already_redeemed": true, "item_type": "skin", "type": "currently_available", "buying_options": { "pika_points": { "points_required": 500 } }, "item_id": "7", "item_display_name": "Lineage 2 Revolution", "size_required": false, "item_description": "Lineage 2 Revolution theme for BlueStacks" }, { "locked": false, "item_tooltip": "Cool Blue theme for BlueStacks", "item_name": "anime-blue", "icon_url": "https://cdn-bgp.bluestacks.com/bluestacks_account/assets/pika_points/pika_aqua_blue_skin.png", "already_redeemed": true, "item_type": "skin", "type": "currently_available", "buying_options": { "pika_points": { "points_required": 500 } }, "item_id": "8", "item_display_name": "Cool Blue", "size_required": false, "item_description": "Cool Blue theme for BlueStacks" }, { "locked": false, "item_tooltip": "Hot Pink theme for BlueStacks", "item_name": "anime-pink", "icon_url": "https://cdn-bgp.bluestacks.com/bluestacks_account/assets/pika_points/pika_hot_pink_skin.png", "already_redeemed": true, "item_type": "skin", "type": "currently_available", "buying_options": { "pika_points": { "points_required": 500 } }, "item_id": "9", "item_display_name": "Hot Pink", "size_required": false, "item_description": "Hot Pink theme for BlueStacks" }, { "locked": false, "item_tooltip": "Buy the Pika card pack", "item_name": "pika_card_pack", "icon_url": "https://cdn-bgp.bluestacks.com/pika_world_cards/assets/card_pack_icons/pika_card_pack.png", "item_type": "card_pack", "type": "currently_available", "buying_options": { "pika_points": { "points_required": 2500 } }, "item_id": "21", "item_display_name": "Pika card pack", "size_required": false, "item_description": "Get 8 random cards from the Pika collection. Unlock a skin faster." }], "premium_user": false, "pika_points_monthly_cap": 9000, "current_monthly_points": 185, "pika_point_items": [{ "locked": false, "item_tooltip": "Pika Points", "item_name": "pika_points_25000", "icon_url": "http://cdn-bgp.bluestacks.com/bluestacks_account/assets/pika_points/coins_large.png", "item_type": "pika_points", "points_to_award": 25000, "type": "currently_available", "buying_options": { "usd": { "usd_required": 20 } }, "item_id": "16", "item_display_name": "Pika Points", "size_required": false, "item_description": "Buy Pika Points" }, { "locked": false, "item_tooltip": "Pika Points", "item_name": "pika_points_sack_10000", "icon_url": "http://cdn-bgp.bluestacks.com/bluestacks_account/assets/pika_points/coins_med.png", "item_type": "pika_points", "points_to_award": 10000, "type": "currently_available", "buying_options": { "usd": { "usd_required": 10 } }, "item_id": "17", "item_display_name": "Pika Points", "size_required": false, "item_description": "Buy Pika Points" }, { "locked": false, "item_tooltip": "Pika Points", "item_name": "pika_points_pouch_5000", "icon_url": "http://cdn-bgp.bluestacks.com/bluestacks_account/assets/pika_points/coins_small.png", "item_type": "pika_points", "points_to_award": 5000, "type": "currently_available", "buying_options": { "usd": { "usd_required": 5 } }, "item_id": "18", "item_display_name": "Pika Points", "size_required": false, "item_description": "Buy Pika Points" }], "all_time_points": 1940325 }

    }
    onTodoChange(event) {
        this.setState({
            name: event.target.value
        });
    }
    render() {
        let listItems = []
        const listArr = this.data.redeemable_items.map(item => {
            if (item.item_display_name.toLowerCase().includes(this.state.name.toLowerCase())) {
                return item;

            }
        })
        if (listArr && listArr.length > 0) {
            listItems = listArr.map((item, index) => {
                if (item) {
                    return (
                        <div key={index} className="listItems">
                            <img className="itemImage" src={item.icon_url} />
                            <div className="pointsDetail">
                                <div className="pointsToAward">{item.points_to_award} </div>
                                <div className="pointSummary">{item.item_display_name}</div>
                                {/* <div className="pointCurr">${item.buying_options.usd.usd_required}</div> */}
                            </div>
                        </div>
                    )
                }
            }

            )
        }



        return (
            <div className="" >
                <div className="heading" >
                    <div className="header-item centerAlign" >
                        <div className="header-item-content centerAlign">
                            <a className="" href="/" >
                                {/* < img alt="MSD" className="logo" src="/app/images/icon.png" /> */}
                            </a>
                            <span className="header-item-label" > Gurugram </span>
                        </div>
                        <div className="searchContainer centerAlign">
                            <input className="searchBox" value="" onChange={e => this.onTodoChange(e)} value={this.state.name} placeholder="search" />
                        </div>
                        {/* <span className="material-icons searchIcon">search</span> */}
                        <div className="myAccount centerAlign">
                            <span>My Account
                                </span>
                            <span className="material-icons expandIcon">expand_more
                                </span>
                            <span className="material-icons cartIcon">local_grocery_store
                                </span>
                            <span className="cartValue">$238
                            </span>
                        </div>
                    </div>
                </div>

                <div className='store-items' data-flex data-layout='column'>
                    <ul className="listContainer">
                        {listItems}
                    </ul>
                </div>
            </div>

        )
    }
}


ReactDOM.render(< App />, document.getElementById('app'));