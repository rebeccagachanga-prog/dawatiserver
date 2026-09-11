const express = require("express");

const router = express.Router();


// =================================
// DAWATI LITERATURE REVIEW API
// =================================

router.post("/", async (req, res) => {

    try {

        const {

            researchTitle,
            sources

        } = req.body || {};


        // =================================
        // VALIDATE REQUEST
        // =================================

        if (!researchTitle) {

            return res.status(400).json({

                success: false,

                message:
                    "Research title is required"

            });

        }


        if (!sources
                || !Array.isArray(sources)
                || sources.length === 0) {

            return res.status(400).json({

                success: false,

                message:
                    "At least one analyzed source is required"

            });

        }


        // =================================
        // DISPLAY REQUEST
        // =================================

        console.log("");
        console.log(
                "===================================="
        );

        console.log(
                "DAWATI LITERATURE REVIEW REQUEST"
        );

        console.log(
                "===================================="
        );

        console.log(
                "Research Title:",
                researchTitle
        );

        console.log(
                "Number of Sources:",
                sources.length
        );


        // =================================
        // GENERATE LITERATURE REVIEW
        // TEMPORARY AI ENGINE
        // =================================

        let literatureReview =

                "LITERATURE REVIEW\n\n"

                + "This literature review examines existing "
                + "academic research related to "
                + researchTitle
                + ". The reviewed sources provide important "
                + "insights into the subject and help establish "
                + "the current state of knowledge.\n\n";


        // =================================
        // PROCESS SOURCES
        // =================================

        sources.forEach(

                (source, index) => {

                    const sourceNumber =
                            index + 1;


                    const authors =
                            source.authors
                            || "Unknown Author";


                    const year =
                            source.year
                            || "n.d.";


                    const title =
                            source.title
                            || "Academic Source";


                    const keyFindings =
                            source.keyFindings
                            || "The source provides relevant findings related to the research topic.";


                    const relevance =
                            source.relevance
                            || "The source contributes useful knowledge to this study.";


                    const researchGap =
                            source.researchGap
                            || "Further research may be required in this area.";


                    literatureReview +=

                            sourceNumber
                            + ". "
                            + authors
                            + " ("
                            + year
                            + ") examined "
                            + title
                            + ". "


                            + "The study found that "
                            + keyFindings
                            + " "


                            + "This is relevant to the current "
                            + "study because "
                            + relevance
                            + " "


                            + "However, the study also highlights "
                            + "a potential research gap: "
                            + researchGap
                            + "\n\n";

                }

        );


        // =================================
        // SYNTHESIS
        // =================================

        literatureReview +=

                "SYNTHESIS OF THE LITERATURE\n\n"

                + "The reviewed studies demonstrate that "
                + "existing research provides valuable insights "
                + "into "
                + researchTitle
                + ". However, differences in research contexts, "
                + "methods, populations, and findings indicate "
                + "the need for further investigation. The "
                + "identified research gaps provide a foundation "
                + "for the current study and support the need "
                + "for additional research.\n";


        // =================================
        // RESPONSE
        // =================================

        res.json({

            success: true,

            message:
                    "Literature review generated successfully",

            literatureReview:
                    literatureReview

        });


    } catch (error) {

        console.error(
                "Literature review error:",
                error
        );


        res.status(500).json({

            success: false,

            message:
                    "Failed to generate literature review"

        });

    }

});


// =================================
// EXPORT ROUTER
// =================================

module.exports = router;

