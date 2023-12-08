import './FAQ.css'
function FAQ() {
    return (
        <>
            <div id='faq-main'>
                <div id='faq-left' data-aos="fade-right" data-aos-duration="1000">
                    <div id='faq-left-one'><p>FAQ</p></div>
                    <div id='faq-left-two'><p>Need <span>Answers?</span></p></div>
                    <div id='faq-left-three'><p>Check out our most commonly asked questions below to find the information you need.</p></div>
                </div>
                <div id='faq-right' data-aos="fade-left" data-aos-duration="1000">
                    <div id='accordion-div'>
                        <div class="accordion">
                            <input id="toggle1" type="radio" class="accordion-toggle" name="toggle" />
                            <label for="toggle1">What is Manage Wise and what does it offer?</label>
                            <section>
                                <p>
                                    Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket meatloaf short ribs.
                                </p>
                                <p>
                                    Brisket meatball turkey short loin boudin leberkas meatloaf chuck andouille pork loin pastrami spare ribs pancetta rump. Frankfurter corned beef beef tenderloin short loin meatloaf swine ground round venison.
                                </p>
                            </section>
                        </div>
                    </div>

                    <div class="accordion">
                        <input id="toggle2" type="radio" class="accordion-toggle" name="toggle" />
                        <label for="toggle2">Is Manage Wise suitable for small business and Large enterprises likewise?</label>
                        <section>
                            <p>
                                Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket meatloaf short ribs.
                            </p>
                            <p>
                                Brisket meatball turkey short loin boudin leberkas meatloaf chuck andouille pork loin pastrami spare ribs pancetta rump. Frankfurter corned beef beef tenderloin short loin meatloaf swine ground round venison.
                            </p>
                        </section>
                    </div>

                    <div class="accordion">
                        <input id="toggle3" type="radio" class="accordion-toggle" name="toggle" />
                        <label for="toggle3">Can I access Manage Wise from different devices and platforms</label>
                        <section>
                            <p>
                                Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket meatloaf short ribs.
                            </p>
                            <p>
                                Brisket meatball turkey short loin boudin leberkas meatloaf chuck andouille pork loin pastrami spare ribs pancetta rump. Frankfurter corned beef beef tenderloin short loin meatloaf swine ground round venison.
                            </p>
                        </section>
                    </div>

                    <div class="accordion">
                        <input id="toggle4" type="radio" class="accordion-toggle" name="toggle" />
                        <label for="toggle4">What kind of support options do you offer to users?</label>
                        <section>
                            <p>
                                Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket meatloaf short ribs.
                            </p>
                            <p>
                                Brisket meatball turkey short loin boudin leberkas meatloaf chuck andouille pork loin pastrami spare ribs pancetta rump. Frankfurter corned beef beef tenderloin short loin meatloaf swine ground round venison.
                            </p>
                        </section>
                    </div>

                    <div class="accordion">
                        <input id="toggle5" type="radio" class="accordion-toggle" name="toggle" />
                        <label for="toggle5">How secure is the data stored with Manage Wise?</label>
                        <section>
                            <p>
                                Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket meatloaf short ribs.
                            </p>
                            <p>
                                Brisket meatball turkey short loin boudin leberkas meatloaf chuck andouille pork loin pastrami spare ribs pancetta rump. Frankfurter corned beef beef tenderloin short loin meatloaf swine ground round venison.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FAQ;