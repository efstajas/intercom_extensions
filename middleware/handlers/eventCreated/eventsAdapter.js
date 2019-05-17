module.exports = (eventType, req, user) => {
    switch(eventType) {
        case "dismissed preflight":
            return {fields: [
                {
                    title: "Type",
                    value: req.data.item.event_name
                },
                {
                    title: "Employee E-Mail",
                    value: user.email,
                    short: true
                },
                {
                    title: "Employee Name",
                    value: user.name,
                    short: true
                },
                {
                    title: "Store Code",
                    value: user.custom_attributes.partner_store,
                    short: true
                },
            ]}
        case "registered new customer":
            return {fields: [
                {
                    title: "Type",
                    value: req.data.item.event_name
                },
                {
                    title: "Employee E-Mail",
                    value: user.email,
                    short: true
                },
                {
                    title: "Employee Name",
                    value: user.name,
                    short: true
                },
                {
                    title: "Store Code",
                    value: user.custom_attributes.partner_store,
                    short: true
                },
                {
                    title: "Customer Name",
                    value: req.data.item.metadata.customer_name,
                    short: true
                },
                {
                    title: "Customer Email",
                    value: req.data.item.metadata.customer_email,
                    short: true
                },
            ]}
            break
        case "selected existing customer":
            return {fields: [
                {
                    title: "Type",
                    value: req.data.item.event_name
                },
                {
                    title: "Employee E-Mail",
                    value: user.email,
                    short: true
                },
                {
                    title: "Employee Name",
                    value: user.name,
                    short: true
                },
                {
                    title: "Store Code",
                    value: user.custom_attributes.partner_store,
                    short: true
                },
                {
                    title: "Customer Name",
                    value: req.data.item.metadata.customer_name,
                    short: true
                },
                {
                    title: "Customer Email",
                    value: req.data.item.metadata.customer_email,
                    short: true
                },
                {
                    title: "Customer Subscription Limit",
                    value: req.data.item.metadata.customer_subscription_limit,
                    short: true
                },
                {
                    title: "Customer Allowance",
                    value: req.data.item.metadata.customer_subscription_allowance,
                    short: true
                },
            ]}
            break
        case "initiated handoff":
            return {fields: [
                {
                    title: "Type",
                    value: req.data.item.event_name
                },
                {
                    title: "Employee E-Mail",
                    value: user.email,
                    short: true
                },
                {
                    title: "Employee Name",
                    value: user.name,
                    short: true
                },
                {
                    title: "Store Code",
                    value: user.custom_attributes.partner_store,
                    short: true
                },
                {
                    title: "Order Number",
                    value: req.data.item.metadata.order_number,
                    short: true
                },
                {
                    title: "Customer Name",
                    value: req.data.item.metadata.customer_name,
                    short: true
                },
                {
                    title: "Customer E-Mail",
                    value: req.data.item.metadata.customer_email,
                    short: true
                },
            ]}
            break
        case "completed approved order":
            return {fields: [
                {
                    title: "Type",
                    value: "🎉🎁🎇 " + req.data.item.event_name + " WOOP WOOP 🎉🎁🎇"
                },
                {
                    title: "Employee E-Mail",
                    value: user.email,
                    short: true
                },
                {
                    title: "Employee Name",
                    value: user.name,
                    short: true
                },
                {
                    title: "Store Code",
                    value: user.custom_attributes.partner_store,
                    short: true
                },
                {
                    title: "Order Number",
                    value: req.data.item.metadata.order_number,
                    short: true
                },
                {
                    title: "Customer Name",
                    value: req.data.item.metadata.customer_name,
                    short: true
                },
                {
                    title: "Customer E-Mail",
                    value: req.data.item.metadata.customer_email,
                    short: true
                },
            ],
            color: "#55ce1c"}
            break
        case "completed declined order":
            return {fields: [
                {
                    title: "Type",
                    value: req.data.item.event_name
                },
                {
                    title: "Employee E-Mail",
                    value: user.email,
                    short: true
                },
                {
                    title: "Employee Name",
                    value: user.name,
                    short: true
                },
                {
                    title: "Store Code",
                    value: user.custom_attributes.partner_store,
                    short: true
                },
                {
                    title: "Order Number",
                    value: req.data.item.metadata.order_number,
                    short: true
                },
                {
                    title: "Customer Name",
                    value: req.data.item.metadata.customer_name,
                    short: true
                },
                {
                    title: "Customer E-Mail",
                    value: req.data.item.metadata.customer_email,
                    short: true
                },
            ],
            color: "#fc0202",
            actions: [
                {
                    type: "button",
                    text: "Employee Conversations 🗣",
                    url: "https://app.intercom.io/a/apps/vq2ybedp/users/" + req.data.item.intercom_user_id + "/all-conversations", 
                }
            ]}
            break
        default:
            return null
    }
}