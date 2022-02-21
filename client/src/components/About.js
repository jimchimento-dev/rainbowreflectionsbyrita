import React from 'react';
import { Typography, Card, CardContent, CardHeader, Grid } from '@mui/material';

const About = () => {
    return (
        <>
            <Grid container
                direction="row"
                alignItems="center"
                justify="center">
                <Grid item xs={12}>
                    <Typography variant="h4" ml={25} mt={5}>About Us</Typography>
                    <hr />
                </Grid>
                <Grid item mt={3} xs={12} md={6} display="flex" justifyContent="center">
                    <img src="/assets/images/Universal Laws.jpg" alt="Universal Laws" style={{ height: "auto", width: "auto", maxWidth: "500px", maxHeight: "600px" }} />
                </Grid>
                <Grid item xs={12} md={6} className="missionContainer">
                    <Typography variant="h3" align="center" mt={3} mb={3}><u>Our Mission</u></Typography>
                    <Typography variant="h5">It is our belief that we are spiritual beings living in a physical body. It is our
                    job to have this earthly experience to further our spiritual growth. We are
                    given 12 Universal Laws of Life to help guide us through this journey so that we can gain the spiritual wisdom and lessons we are here to achieve.</Typography>
                    <Typography mt={4} variant="h5">At Rainbow Reflections by Rita, we hope to teach and empower our clients about the Universal Laws of life so they can live their life to their fullest potential.</Typography>

                </Grid>
                <Grid item xs={12} mt={5} p={2} display="flex" justifyContent="center" align="center" >
                    <CardContent sx={{ backgroundColor: "yellow", border: "2px solid", fontSize: "20px", width: "80%" }}>
                        <Typography variant="p">
                            "I believe we all journey through life with different goals and dreams; sometimes not even knowing why we are drawn to certain places or things. We are all individuals, but a part of something bigger."
                        </Typography>
                        <footer style={{ marginTop: 10 }}>
                            <cite title="Source Title"> - Rita Chimento, Rainbow Reflections By Rita</cite>
                        </footer>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={6} mt={7} mb={4} align="center" display="flex" justifyContent="center" px={5}>
                    <Card>
                        <CardHeader title="Rita's Credentials And Certifications" sx={{ borderBottom: "2px solid black", backgroundColor: "lightblue" }} />
                        <CardContent sx={{ fontSize: "20px" }}>
                            <ul>
                                <li>2010: Levels I, II and Master Reiki Certification at Huna Healing Center - Denville,
                                NJ.
                                </li>
                                <br />
                                <li>2010 - 2015: Psychic devleopment classes at various metaphysical locations.</li>
                                <br />
                                <li>2015: Ordained Minister through International Metaphysical Ministry.</li>
                                <br />
                                <li>2015: Bachelor of Metaphysical Science from University of Metaphysics.</li>
                                <br />
                                <li>2015: Practitioners Diploma for Metaphysical Practitioner.</li>
                                <br />
                                <li>2015: Beginning, Intermediate and Advanced Mediumship classes with Janet Nohavec
                                from
                                the
                                    Journey Within - Pompton Lakes, NJ.</li>
                                <br />
                                <li>2015-2017: Various courses and circles at Institute for Spiritual Development -
                                Sparta,
                                NJ.
                                Including mediumship, tarot, psychic development, etc. Instructors included Karen
                                Slember,
                                    Rev. Susan Cahill and Anna Marie Ludwig.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} direction="column" display="flex" justifyContent="center" mb={3}>
                    <img src="/assets/images/Rainbow Reflections Store Outside New (1).jpg" alt="Rainbow Reflections Store Outside" style={{ width: "100%", height: "auto" }} />
                </Grid>
            </Grid>
        </>
    )
}

export default About;