const express = require("express");

const router = express.Router();

console.log("LITERATURE REVIEW ROUTE LOADED");

// =================================
// DAWATI LITERATURE REVIEW API
// =================================

router.post("/", async (req, res) => {


try {

    const {

        researchTitle,
        researchIdea,
        fieldOfStudy,
        levelOfStudy,

        objective1,
        objective2,
        objective3,
        objective4,

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


    if (
        !sources ||
        !Array.isArray(sources) ||
        sources.length === 0
    ) {

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
        "Research Idea:",
        researchIdea || "Not provided"
    );

    console.log(
        "Field of Study:",
        fieldOfStudy || "Not provided"
    );

    console.log(
        "Level of Study:",
        levelOfStudy || "Not provided"
    );

    console.log(
        "Objective 1:",
        objective1 || "Not provided"
    );

    console.log(
        "Objective 2:",
        objective2 || "Not provided"
    );

    console.log(
        "Objective 3:",
        objective3 || "Not provided"
    );

    console.log(
        "Objective 4:",
        objective4 || "Not provided"
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

        "CHAPTER TWO: LITERATURE REVIEW\n\n";


    // =================================
    // 2.1 INTRODUCTION
    // =================================

    literatureReview +=

        "2.1 Introduction\n\n"

        + "This chapter reviews existing academic "
        + "literature related to the study titled "
        + "\"" + researchTitle + "\". "

        + "The review examines existing knowledge, "
        + "empirical findings, methodological approaches, "
        + "and research gaps relevant to the study. "

        + "The literature is considered in relation to "
        + "the research objectives and the identified "
        + "research problem.\n\n";


    // =================================
    // RESEARCH CONTEXT
    // =================================

    literatureReview +=

        "Research Context\n\n"

        + "The study is situated within the field of "
        + (fieldOfStudy || "the relevant academic field")
        + " and is conducted at the "
        + (levelOfStudy || "specified academic level")
        + " level. "

        + (researchIdea
            ? "The central research idea focuses on "
              + researchIdea
              + ".\n\n"
            : "\n");


    // =================================
    // RESEARCH OBJECTIVES
    // =================================

    literatureReview +=

        "Research Objectives\n\n";


    if (objective1) {

        literatureReview +=
            "1. " + objective1 + "\n";

    }

    if (objective2) {

        literatureReview +=
            "2. " + objective2 + "\n";

    }

    if (objective3) {

        literatureReview +=
            "3. " + objective3 + "\n";

    }

    if (objective4) {

        literatureReview +=
            "4. " + objective4 + "\n";

    }


    literatureReview += "\n";


    // =================================
    // 2.2 EMPIRICAL REVIEW
    // =================================

    literatureReview +=

        "2.2 Empirical Review\n\n";


    // =================================
    // PROCESS SOURCES
    // =================================

    sources.forEach(

        (source, index) => {

            const sourceNumber =
                index + 1;


            const authors =
                source.authors ||
                "Unknown Author";


            const year =
                source.year ||
                "n.d.";


            const title =
                source.title ||
                "Academic Source";


            const journal =
                source.journal ||
                "";


            const keyFindings =
                source.keyFindings ||
                "The source provides relevant findings related to the research topic.";


            const methodology =
                source.methodology ||
                "The methodology was not specified in the available source analysis.";


            const limitations =
                source.limitations ||
                "The limitations were not specified in the available source analysis.";


            const relevance =
                source.relevance ||
                "The source contributes useful knowledge to the current study.";


            const researchGap =
                source.researchGap ||
                "Further research may be required in this area.";


            literatureReview +=

                sourceNumber
                + ". "
                + authors
                + " ("
                + year
                + "). ";


            literatureReview +=

                title
                + ". ";


            if (journal) {

                literatureReview +=
                    journal
                    + ". ";

            }


            literatureReview +=

                "The study reported that "
                + keyFindings
                + " ";


            literatureReview +=

                "The study employed "
                + methodology
                + " ";


            literatureReview +=

                "In terms of limitations, "
                + limitations
                + " ";


            literatureReview +=

                "The study is relevant to the "
                + "current research because "
                + relevance
                + " ";


            literatureReview +=

                "A research gap identified from "
                + "the study is that "
                + researchGap
                + "\n\n";

        }

    );


    // =================================
    // 2.3 THEMATIC SYNTHESIS
    // =================================

    literatureReview +=

        "2.3 Thematic Synthesis\n\n"

        + "The reviewed literature demonstrates "
        + "that research related to "
        + researchTitle
        + " has examined the subject from "
        + "different perspectives. "

        + "The findings from the reviewed studies "
        + "provide complementary evidence while "
        + "also demonstrating differences in "
        + "research contexts, populations, methods, "
        + "and conclusions.\n\n";


    // =================================
    // 2.4 METHODOLOGICAL REVIEW
    // =================================

    literatureReview +=

        "2.4 Methodological Review\n\n"

        + "The analyzed studies demonstrate "
        + "different methodological approaches "
        + "to investigating issues related to "
        + researchTitle
        + ". These methodological approaches "
        + "provide useful insights into how the "
        + "current study can be positioned within "
        + "the existing body of academic research.\n\n";


    // =================================
    // 2.5 RESEARCH GAPS
    // =================================

    literatureReview +=

        "2.5 Research Gaps\n\n"

        + "The reviewed literature reveals "
        + "several areas that require further "
        + "investigation. Although previous "
        + "studies have contributed important "
        + "knowledge to the subject, differences "
        + "in research contexts, methodologies, "
        + "populations, and findings indicate "
        + "that some aspects remain insufficiently "
        + "explored.\n\n";


    // =================================
    // 2.6 CHAPTER SUMMARY
    // =================================

    literatureReview +=

        "2.6 Chapter Summary\n\n"

        + "This chapter reviewed literature "
        + "related to "
        + researchTitle
        + ". The review considered empirical "
        + "findings, methodological approaches, "
        + "thematic issues, and research gaps. "

        + "The identified gaps provide a basis "
        + "for the current study and demonstrate "
        + "the need for further investigation "
        + "in the selected research context.\n";


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
