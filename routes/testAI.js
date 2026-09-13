
const express = require("express");

const router = express.Router();

const {
    generateAIResponse
} = require("../services/aiService");


// =================================
// TEST DAWATI AI ENGINE
// =================================

router.get("/", async (req, res) => {

    try {

        const instructions =
                "You are DAWATI AI, an intelligent academic research and writing assistant.";


        const prompt =
                "In one short sentence, explain what academic research is.";


        const result =
                await generateAIResponse(
                        instructions,
                        prompt
                );


        res.json({

            success: true,

            message:
                    "DAWATI AI is working",

            response:
                    result

        });


    } catch (error) {

        console.error(
                "AI Test Error:",
                error
        );


        res.status(500).json({

            success: false,

            message:
                    "DAWATI AI connection failed",

            error:
                    error.message

        });

    }

});


module.exports = router;

