const OpenAI = require("openai");


const openai = new OpenAI({

    apiKey:
        process.env.OPENAI_API_KEY

});


// =================================
// DAWATI AI SERVICE
// =================================

async function generateAIResponse(
        instructions,
        prompt
) {

    try {

        const response =
                await openai.responses.create({

                    model: "gpt-5",

                    instructions:
                        instructions,

                    input:
                        prompt

                });


        return response.output_text;


    } catch (error) {

        console.error(
                "OpenAI Error:",
                error
        );

        throw error;

    }

}


// =================================
// EXPORT
// =================================

module.exports = {

    generateAIResponse

};