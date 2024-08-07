const mongoose = require("mongoose");


const CustomerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        email: {
            type: String,
            required: true,
            default: "",
            max: 50,
            unique: true,
        },
        address: {
            type: {},
        },
        gstin: {
            type: String,
            default: "",
        },
        status: {
            type: String,
            required: true,
            default: "Inactive",
        },
        contactName: {
            type: String,
            required: true,
            default: "",
        },
        phoneNumber: {
            type: String,
            required: true,
            default: "",
        },
        handledBy: {
            type: mongoose.Types.ObjectId,
            ref: "Product",
            required: true,
            default: "66a61593305d6d104dade89d",
        },
        purchase: {
            type: {
                name: {
                    type: String,
                },
                mobile: {
                    type: String,
                },
                email: {
                    type: String,
                },
            }
        },
        accountant: {
            type: {
                name: {
                    type: String,
                },
                mobile: {
                    type: String,
                },
                email: {
                    type: String,
                },
            }
        },
        merchandiser: {
            type: {
                name: {
                    type: String,
                },
                mobile: {
                    type: String,
                },
                email: {
                    type: String,
                },
            }
        },
        paymentTerms: {
            type: String,
            required: true,
            default: ""
        },
        transporter: {
            type: {},
        },
        transactions: [],
        products: [{
            id: {
                type: mongoose.Types.ObjectId,
                ref: "Product"
            },
        }]
    },
    { timestamps: true }
);

const Customer = mongoose.model("Customer", CustomerSchema);
module.exports = Customer;