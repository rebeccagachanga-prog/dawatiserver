
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const searchRoutes = require("./routes/search");
const analyzeRoutes = require("./routes/analyze");
const literatureReviewRoutes =
    require("./routes/literatureReview");
const testAIRoutes =
        require("./routes/testAI");

const app = express();


// ================================
// MIDDLEWARE
// ================================

app.use(cors());

app.use(express.json());


// ================================
// ROUTES
// ================================

app.use("/api/search", searchRoutes);
app.use("/api/analyze", analyzeRoutes);
app.use(
    "/api/literature-review",
    literatureReviewRoutes
);
app.use(
        "/api/test-ai",
        testAIRoutes
);


// ================================
// TEST ROUTE
// ================================

app.get("/", (req, res) => {

    res.json({
        message: "DAWATI Cloud Server is running"
    });

});


// ================================
// START SERVER
// ================================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(
        "DAWATI Server running on port " + PORT
    );

});
