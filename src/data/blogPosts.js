export const blogPosts = {
    'guesstimate-question': {
        title: "Guesstimate Question",
        subtitle: "Breaking down complex problems into solvable chunks.",
        date: "Nov 2024",
        readTime: "4 min read",
        author: "Ajinkya Kate",
        content: `
            <p>Guesstimates are a staple of PM interviews, but they are also a great way to sharpen product thinking. Here's the lightweight structure I use.</p>

            <h3>1) Frame the ask before the math</h3>
            <p>Confirm the objective, the user, and the geography. Ask clarifying questions so you're not solving the wrong problem.</p>

            <h3>2) Break into sensible buckets</h3>
            <p>For a rides-per-day estimate, split by city size (tier 1/2/3), population, smartphone penetration, and % of people who use cabs weekly.</p>

            <h3>3) Choose assumptions you can defend</h3>
            <p>Use round numbers, cite intuition (“tier-1 smartphone penetration ~80%”), and state a quick rationale for each percentage.</p>

            <h3>4) Do clean math in public</h3>
            <p>Show the equation first, then plug numbers: population × smartphone % × cab-using % × trips per week ÷ 7.</p>

            <h3>5) Sense-check and stress-test</h3>
            <p>Compare the output to a known anchor (e.g., reported rides/day from Uber or Ola). Adjust if it feels off by an order of magnitude.</p>

            <h3>6) Close with insight, not just a number</h3>
            <p>Share 2–3 drivers that would move the result most (e.g., smartphone penetration, adoption in tier-2 cities) and how you'd validate them with data.</p>

            <p style="margin-top: 2rem;"><em>Want the full write-up? Read the complete post on Medium: <a href="https://medium.com/@Ajinkya_Kate/guesstimate-question-8779d25f76c0" target="_blank">Guesstimate Question</a>.</em></p>
        `
    }
};
