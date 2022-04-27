import React, { Component } from "react";
import WishList from "./WishList"
import WishListCreateForm from "./WishListCreateForm";
import WishListEditForm from "./WishListEditForm";
import axios from "axios";

export default class WishListList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            wishLists: [],
            isEdit: false,
            currentWishList: ""
        }
    }

    componentDidMount() {
        this.loadWishList();
    }

    loadWishList = async() => {
        let res = await axios.get("/wishList/index")
        this.setState({wishLists: res.data})
        // Axios.get("/wishList/index")
        //     .then((response) => {
        //         console.log(response.data.wishLists);
        //         this.setState({
        //             wishLists: response.data.wishLists
        //         })
        //     })
        //     .catch((error) => {
        //         console.log("Error Fetching Wishlist!!!");
        //         console.log(error);
        //     })

    }

    // loadWishList = (wishList) => {
    //     console.log(wishList)
    //     if (wishList.vacation) {
    //         const vacations = wishList.vacation.map((vacation, key) => (
    //             <td key={key}>
    //                 <li> {vacation.name} </li>
    //             </td>
    //         ));
    //         return vacations;
    //     }
    // }

    addWishList = (wishList) => {
        axios.post("wishList/add", wishList)
            .then((response) => {
                console.log("WishList Added successfully!!!")
                this.loadWishList();
            })
            .catch(error => {
                console.log("Error Adding Wish List");
                console.log(error);
            })
    }

    editList = (id) => {
        axios.get((`wishList/edit?id=${id}`))
            .then(response => {
                console.log("Loaded WishList Information!!!")
                console.log(response.data.wishList);
                var wishList = response.data.wishList;
                this.setState({
                    isEdit: true,
                    currentWishList: wishList
                })
            })
            .catch(error => {
                console.log("Error Loading Wish List Information");
                console.log(error)
            })
    }

    editWishList = (wishList) => {
        axios.put("wishList/update", wishList)
            .then(response => {
                console.log("Wish List Updated!!!");
                console.log(response);
                this.loadWishList();
            })
            .catch(error => {
                console.log("Error Updating Wish List!!!")
                console.log(error);
            })
    }

    deleteWishList = (id) => {
        axios.delete(`wishList/delete?id=${id}`)
            .then(response => {
                console.log("Deleted Wish List!!!")
                this.loadWishList();
            })
            .catch(error => {
                console.log("Error Deleting Wish List");
                console.log(error);
            })
    }

    render() {
        console.log(this.state)
        const allWishLists = this.state.wishLists.map((wishList, index) => {
            return <tr key={index}>
                <WishList {...wishList} editList={this.editList} editWishList={this.editWishList} deleteWishList={this.deleteWishList}></WishList>
            </tr>
        })

        return <div>
            <h1>Wish List</h1>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                        {allWishLists}
                    </tbody>
                </table>
            </div>
            <div>
                {(!this.state.isEdit) ?
                    <WishListCreateForm addWishList={this.addWishList}></WishListCreateForm> :
                    <WishListEditForm key={this.state.currentWishList._id}
                        wishList={this.state.currentWishList}
                        editWishList={this.editWishList}
                        editList={this.editList}
                        ></WishListEditForm>
                }

            </div>
        </div>;
    }
}
