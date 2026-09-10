
const express = require("express");

const router = express.Router();


// =================================
// DAWATI RESEARCH SEARCH API
// =================================

router.post("/", (req, res) => {

    console.log("Received body:");
    console.log(req.body);

    const {
        title,
        idea,
        fieldOfStudy,
        levelOfStudy,
        objective1,
        objective2,
        objective3,
        objective4
    } = req.body || {};

    // =================================
    // VALIDATE RESEARCH INFORMATION
    // =================================

    if (!title || !idea || !fieldOfStudy) {

        return res.status(400).json({

            success: false,

            message:
                "Research title, idea and field of study are required"

        });

    }


    // =================================
    // DISPLAY REQUEST ON SERVER
    // =================================

    console.log("");
    console.log("====================================");
    console.log("DAWATI RESEARCH SEARCH REQUEST");
    console.log("====================================");

    console.log("Title:", title);

    console.log("Idea:", idea);

    console.log("Field of Study:", fieldOfStudy);

    console.log("Level of Study:", levelOfStudy);

    console.log("Objective 1:", objective1);

    console.log("Objective 2:", objective2);

    console.log("Objective 3:", objective3);

    console.log("Objective 4:", objective4);


    // =================================
    // TEMPORARY RESPONSE
    // REAL ACADEMIC SEARCH COMES NEXT
    // =================================

    res.json({

        success: true,

        message:
            "DAWATI received the research project",

        research: {

            title,

            idea,

            fieldOfStudy,

            levelOfStudy,

            objectives: [

                objective1,

                objective2,

                objective3,

                objective4

            ]

        }

    });

});


module.exports = router;

