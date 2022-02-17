import React from 'react';
import { Typography, Card, CardContent, CardHeader, Grid } from '@mui/material';

const About = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h4" ml={25} mt={5}>About Us</Typography>
                    <hr />
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" mt={5}>
                <Grid item xs={12} sm={6} direction="column" sx={{ display: "flex", alignItems: "center" }}>
                    <img src="/assets/images/Rainbow Reflections Store Outside New (1).jpg" alt="Rainbow Reflections Outside" style={{ maxWidth: '100%', height: '400px' }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h3" sx={{ textAlign: 'center' }} mb={3}>Our Mission</Typography>
                    <Typography variant="p" sx={{ fontSize: '20px' }}>We strive to put a smile on the face of all of our customers to help
                    them achieve a positive mindset. By doing so, we hope to empower them to live life to their fullest
                    potential. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, id ab quas modi
                    minima vel tenetur explicabo, in nostrum totam quidem dignissimos, voluptatem earum commodi aut
                    necessitatibus exercitationem vitae at!
                    Quos, numquam nobis. Nobis in perferendis atque odit, sit vel totam laboriosam fuga magni
                    accusamus velit rem aliquam labore voluptatibus, nulla asperiores at iste aut? Iure id repudiandae nulla distinctio!</Typography>
                </Grid>
                <Grid item xs={12} mt={5}>
                    <CardContent sx={{ backgroundColor: "yellow", border: '2px solid', fontSize: '20px', mx: 'auto', overflow: 'auto' }}>
                        <Typography variant="p" sx={{ fontSize: '20px' }}>
                            "I believe we all journey through life with different goals and dreams; sometimes not even knowing why we are drawn to certain places or things. We are all individuals, but a part of something bigger."
                        </Typography>
                        <footer>
                            <cite title="Source Title"> - Rita Chimento, Rainbow Reflections By Rita</cite>
                        </footer>
                    </CardContent>
                </Grid>
                <Grid item xs={12} sm={6} mt={7} mb={4}>
                    <Card>
                        <CardHeader title="Rita's Credentials And Certifications" sx={{ borderBottom: '2px solid black', textAlign: 'center', backgroundColor: 'lightblue' }} />
                        <CardContent sx={{ fontSize: '20px' }}>
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
                <Grid item xs={12} sm={6} direction="column" sx={{ display: "flex", alignItems: "center" }}>
                    <img src="/assets/images/Rainbow Reflections Store Inside (1).jpg" alt="Rainbow Reflections Inside" style={{ maxWidth: '100%', height: '400px' }} />
                </Grid>
            </Grid>
        </>
    )
}

export default About;