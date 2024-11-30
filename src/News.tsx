import "./App.css";
import { useEffect, useState } from "react";

import {
  updateClampClassMobileShort,
  updateClampClassTabletLong,
} from "./utilities/articleModifier";
import { fetchArticles } from "./utilities/articleFetch";

import New from "./New";
import FirstNew from "./FirstNew";
import LiveNew from "./LiveNew";

export interface INewProps {
  urlToImage: string;
  title: string;
  content: string;
  publishedAt: string;
  topic: string;
}

export interface INewsProps {
  new: INewProps;
}

function News() {
  const [news, setNews] = useState<INewProps[]>();

  const topics = [
    "Home",
    "News",
    "Sport",
    "Business",
    "Innovation",
    "Culture",
    "Arts",
    "Travel",
    "Earth",
  ];

  const getRandomTopic = () => {
    const randomIndex = Math.floor(Math.random() * topics.length);
    return topics[randomIndex];
  };

  useEffect(() => {
    async function getAllNews() {
      const fetchedNews = await fetchArticles();
      setNews(fetchedNews.articles);
      updateClampClassMobileShort();
      updateClampClassTabletLong();
    }

    getAllNews().then((fetchedNew) => fetchedNew);

    const handleResize = () => {
      updateClampClassMobileShort();
      updateClampClassTabletLong();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const filteredNews = news?.filter(
    (fetchedNew) => fetchedNew.title !== "[Removed]" && fetchedNew.content !==""
  );
  return (
    <main className="main flex flex-wrap px-4 pt-20 md:pt-30 lg:pt-44">
      {filteredNews !== undefined && filteredNews.length > 0 && (
        <>
          {filteredNews.length > 0 && (
            <FirstNew
              urlToImage={filteredNews[0].urlToImage}
              title={filteredNews[0].title}
              content={filteredNews[0].content}
              publishedAt={filteredNews[0].publishedAt}
              topic={getRandomTopic()}
              key={filteredNews[0].urlToImage}
            />
          )}

          {filteredNews.length > 1 && (
            <LiveNew
              urlToImage={filteredNews[1].urlToImage}
              title={filteredNews[1].title}
              content={filteredNews[1].content}
              publishedAt={filteredNews[1].publishedAt}
              topic={getRandomTopic()}
              key={filteredNews[1].urlToImage}
            />
          )}

          <section className="main__older-articles flex flex-1 min-w-1/2 flex-wrap">
            {filteredNews.length > 2 &&
              filteredNews
                .slice(2)
                .map((fetchedNew) => (
                  <New
                    urlToImage={fetchedNew.urlToImage}
                    title={fetchedNew.title}
                    content={fetchedNew.content}
                    publishedAt={fetchedNew.publishedAt}
                    topic={getRandomTopic()}
                    key={fetchedNew.urlToImage}
                  />
                ))}

          </section>
        </>
      )}
    </main>
  );
}

/*
function News() {

  useEffect(() => {
    getArticles();

    updateClampClassMobileShort();
    updateClampClassTabletLong();
  
    const handleResize = () => {
      updateClampClassMobileShort();
      updateClampClassTabletLong();
    };

    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleArticleClick = (event: React.MouseEvent<HTMLElement>) => {
    const clickedArticle = event.currentTarget; 
    toggleFullscreen(clickedArticle as HTMLElement); 
  };


  return (
    <main className="main flex flex-wrap px-4 pt-20 md:pt-30 lg:pt-44">

    <article  onClick={handleArticleClick}
        className="main__article w-full md:w-1/3 lg:w-1/4 xl:w-1/4 flex flex-row md:flex-col border-b border-gray-300 md:border-b-0 lg:border-b">
        <img className="main__article-image w-1/2 md:w-full h-full md:h-1/2 lg:w-full lg:h-1/2 xl:w-full"
            src="/src/assets/images/new1.png" alt="article image"/>
        <section className="main__article-text-container w-1/2 md:w-full h-full md:h-1/2 lg:w-full lg:h-1/2 xl:w-full">
            <h2 className="main__article-title">The Lebanon ceasefire is a respite, not a solution for the Middle East
            </h2>
            <p className="main__article-text main__article-text-mobile-short">For most of the people of Lebanon, a
                ceasefire could not come quickly
                enough. A leading Lebanese analyst at a conference on the Middle East that I’m attending in Rome
                said she couldn’t sleep as the appointed hour for the ceasefire came closer.

                “It was like the night before Christmas when you’re a kid. I couldn’t wait for it to happen.”

                You can see why there’s relief. More than 3,500 citizens of Lebanon have been killed in Israeli
                strikes. Displaced people packed their cars before dawn to try to get back to whatever remains of
                their homes.

                Well over one million of them have been forced to flee by Israeli military action. Thousands have
                been wounded and the homes of tens of thousands of others have been destroyed.

                But in Israel, some feel they have lost the chance to do more damage to Hezbollah. Prime Minister
                Benjamin Netanyahu met the heads of Israel’s northern municipalities, which have been turned into
                ghost towns with around 60,000 civilians evacuated further south.

                Israel’s Ynet news website reported that it was an angry meeting that turned into a shouting match,
                with some of the local officials frustrated that Israel was taking the pressure off their enemies in
                Lebanon and not offering an immediate plan to get civilians home.

                In a newspaper column, the mayor of Kiryat Shmona, close to the border, said he doubted the
                ceasefire would be enforced, demanding that Israel creates a buffer zone in south Lebanon. In a poll
                commissioned by the Israeli station Channel 12 News those questioned were roughly split between
                supporters and opponents of the ceasefire.

                Half of the participants in the survey believe Hezbollah has not been defeated and 30% think the
                ceasefire will collapse. Back in late September, at the UN General Assembly in New York, a deal
                looked as if it was close. Diplomats from the US and UK were convinced that a ceasefire very similar
                to the one that is now coming into force was about to happen.

                All sides in the war appeared to have signalled their willingness to accept a ceasefire based on the
                provisions of Security Council resolution 1701, which was passed to end the 2006 Lebanon war:
                Hezbollah would pull back from the border to be replaced by UN peacekeepers and the Lebanese Armed
                Forces. As they moved in, Israeli forces would gradually move out.

                But Prime Minister Netanyahu went to the podium at the UN to deliver a fiery speech that refused to
                accept any pause in Israel’s offensive.

                Back at his New York hotel Netanyahu’s official photographer captured the moment as he ordered the
                assassination of Hassan Nasrallah, the leader of Hezbollah, along with most of his high command.
                Netanyahu’s office released the photos, in another calculated snub for American diplomacy.

                The assassination was a significant escalation and a blow to Hezbollah. In the weeks since, Israel’s
                military has inflicted immense damage to Hezbollah’s military organisation. It could still fire
                rockets over the border and its fighters continued to engage Israel’s invasion force. But Hezbollah
                is no longer the same threat to Israel.</p>
            <div className="main__time-and-topic-container hidden md:flex">
                <p>2 mins ago</p> |
                <p>News</p>
            </div>

        </section>
    </article>

    <article  onClick={handleArticleClick}
        className="main__article w-full md:w-2/3 lg:w-2/4 xl:w-2/4 flex flex-row md:flex-col border-b border-gray-300 border-b md:border-0">
        <img className="main__article-image w-1/2 md:w-full h-full md:h-2/3" src="/src/assets/images/news4.jpg" alt="article image"/>
        <section className="main__article-text-container w-1/2 md:w-full h-full md:h-1/3">
            <div className="main__live-text-with-article-text">
                <p className="main__live-text">LIVE</p>
                <h2 className="main__article-title">First new asthma attack treatment in 50 years</h2>
            </div>
            <p className="main__article-text clamp-2">Researchers say they have found the first new treatment for asthma
                attacks
                in 50 years.

                The injection dampens part of the immune system that can go into overdrive in flare-ups of both
                asthma and a lung condition called chronic obstructive pulmonary disease (COPD).

                Benralizumab is already used in the most severe cases, but the latest research suggests it could be
                used routinely for around two million attacks in the UK each year.

                The research team at King's College London said the drug was a "game-changer" that could
                "revolutionise" care.

                The findings stem from the realisation that not all asthma or COPD attacks are the same. Instead,
                different parts of the immune system are over-reacting in different patients.

                "Now we can see there are different patterns of inflammation, we can be smarter and get the right
                treatment, to the right patient, at the right time," said Prof Mona Bafadhel, from King's.

                Benralizumab targets a type of white blood cell - called an eosinophil - that can cause inflammation
                and damage in the lungs.

                Eosinophils are implicated in about half of asthma attacks and a third of COPD flare-ups.

                If such an attack - involving difficulty breathing, wheezing, coughing and chest tightness - cannot
                be controlled with regular inhalers then doctors currently prescribe a course of steroids.

                The study, on 158 people, monitored patients for three months after treatment for a flare-up.

                The results in The Lancet Respiratory Medicine found a treatment failure rate of:

                74% when taking steroids
                and 45% with the new therapy
                People treated with the new therapy were less likely to be admitted to hospital, need another round
                of treatment or die.

                Prof Bafadhel said this could benefit a huge number of people as two million attacks a year "is not
                a small number".

                "This is a game-changer, we’ve not had a change in treatment for 50 years - it will revolutionise
                how we treat people when they’re really unwell," Prof Bafadhel said.

                Volunteers also reported improved symptoms and a better quality of life on the new drug.Alison
                Spooner, who is 55 and from Oxfordshire, was one of those taking part in the trial. She has had
                asthma since childhood, but it became worse over the past five years and she's had three major
                attacks.

                "They seemed to be getting worse, the severe lack of breath was quite frightening when you're
                gasping and there's nothing to gasp at," she told me.

                Alison says she felt "drastically different" after having the injection and still uses her inhalers
                but "only because I've been told to".

                "Unfortunately, no drug gets rid of asthma completely, but this is the nearest thing. It's a bit of
                a miracle actually," she adds.</p>
        </section>
    </article>

    <section className="main__older-articles flex flex-1 min-w-1/2 flex-wrap">
        <article  onClick={handleArticleClick}
            className="main__article  sm:flex sm:flex-row flex   w-full sm:w-1/2 md:w-1/2 lg:w-full xl:w-full border-b border-gray-300 md:border-b-0 lg:border-b md:pr-4">
            <img className="main__article-image w-1/2 h-full  md:hidden" src="/src/assets/images/news5.jpg" alt="article image"/>
            <section className="main__article-text-container w-1/2 md:w-full h-full md:h-1/2 lg:w-full lg:h-1/2 xl:w-full">
                <h2 className="main__article-title">Ireland pick Prendergast over Crowley for Australia</h2>
                <p className="main__article-text main__article-text-tablet-long"> Autumn Nations Series: Ireland v
                    Australia

                    Venue: Aviva Stadium, Dublin Date: Saturday, 30 November Kick-off: 15:10 GMT

                    Coverage: Listen on BBC Radio 5 Sports Extra and BBC Sounds, live text and commentary on the BBC
                    Sport website and app

                    Sam Prendergast has retained his place in the Ireland team for Saturday's concluding autumn Test
                    against Australia as he is preferred at fly-half to Jack Crowley.

                    After making his debut as a second-half replacement for Crowley in the narrow win over Argentina
                    two weeks ago, Prendergast earned his first Ireland start in last weekend's 52-17 victory over
                    Fiji.

                    The 21-year-old overcame an early yellow card against Fiji to produce a promising display that
                    included five successful conversions and a cross-kick that set up a Mack Hansen try.

                    Leinster prop Cian Healy, who is named on the bench, is set to earn a record-breaking 134th cap
                    after equalling Brian O'Driscoll's record in the Argentina game.

                    Ireland show five changes from last weekend, with Hugo Keenan, James Lowe and Jamison
                    Gibson-Park taking over from Jamie Osborne, Jacob Stockdale and Craig Casey in the backs.

                    Ronan Kelleher and James Ryan's inclusions mean Gus McCarthy and Cormac Izuchukwu, both of whom
                    made their debuts against Fiji, drop out of the starting pack.

                    Ryan's selection means Tadhg Beirne reverts to the back row.

                    "Cian is a giant of Irish rugby and we are determined to provide him with a performance that he
                    deserves," said Ireland head coach Andy Farrell.</p>
                <div className="main__time-and-topic-container hidden md:flex">
                    <p>4 mins ago</p> |
                    <p>Sport</p>
                </div>
            </section>
        </article>

        <article  onClick={handleArticleClick}
            className="main__article  sm:flex sm:flex-row flex   w-full sm:w-1/2 md:w-1/2 lg:w-full xl:w-full border-b border-gray-300 md:border-b-0 lg:border-b md:pr-4">
            <img className="main__article-image w-1/2 h-full  md:hidden" src="/src/assets/images/news6.jpg" alt="article image"/>
            <section className="main__article-text-container w-1/2 md:w-full h-full md:h-1/2 lg:w-full lg:h-1/2 xl:w-full">
                <h2 className="main__article-title">Uniqlo does not use Xinjiang cotton, boss says</h2>
                <p className="main__article-text main__article-text-tablet-long">The boss of the company behind global
                    fashion chain Uniqlo has told
                    the BBC that the Japanese firm does not use cotton from the Xinjiang region of China in its
                    products.

                    It is the first time Fast Retailing's chief executive Tadashi Yanai has directly addressed the
                    contentious issue.

                    China is a crucial market for Uniqlo not just for customers but also as a major manufacturing
                    hub.

                    Xinjiang cotton was once known as some of the best fabric in the world.

                    But it has fallen out of favour after revelations that it is produced using forced labour by
                    people from the Muslim Uyghur minority.

                    In 2022, tough US regulations on the import of goods from Xinjiang came into effect.

                    Many global brands removed products using Xinjiang cotton from their shelves, which led to
                    fierce backlash in China. Brands such as H&M, Nike, Burberry, Esprit and Adidas were boycotted.

                    Sweden's H&M saw its clothing pulled from major e-commerce stores in China.

                    At the time, Mr Yanai - who is Japan's richest man - refused to confirm or deny whether Xinjiang
                    cotton was used in Uniqlo clothing, saying he wanted "to be neutral between the US and China".

                    His decision not to take a side helped Uniqlo to remain popular in China's huge retail market.

                    But speaking to the BBC in Tokyo about the firm's measures to be more transparent about where
                    the materials in its clothes come from and how they are made, he said: "We’re not using [cotton
                    from Xinjiang]."

                    "By mentioning which cotton we’re using..." he continued, before pausing and ending his answer
                    with "Actually, it gets too political if I say anymore so let's stop here".

                    Isaac Stone Fish, the chief executive and founder of Strategy Risks, a business intelligence
                    firm with a China focus highlights the pressures on firms from both China and the US.

                    "Not a single large company can remain politically neutral anymore," he says.

                    "Both Beijing and Washington want companies to choose sides, and Tokyo will continue to lean
                    closer to the United States in this matter."

                    Even though Uniqlo has been expanding aggressively in Europe and the US, in Mr Yanai's own
                    words, "we are not a known brand globally" and Asia is still its biggest market.

                    The company has more stores in China than in its home country Japan, and Mr Yanai says he does
                    not plan to change that strategy despite challenges in the world's second biggest economy.

                    “There are 1.4 billion people in China and we only have 900 to 1,000 stores," he says. "I think
                    we can increase that to 3,000.”

                    Meanwhile, China is Uniqlo's single biggest manufacturing hub. The company also makes clothes in
                    countries including Vietnam, Bangladesh, Indonesia and India.

                    In 2009, when 80% of its products were made in China, Mr Yanai told the BBC that China was
                    getting too expensive and the firm was shifting production away "to lower-wage Cambodia to keep
                    prices low".

                    He now says it was challenging to repeat China's success as the world's factory in other
                    countries as transferring years of experience proved difficult.</p>
                <div className="main__time-and-topic-container hidden md:flex">
                    <p>2 hrs ago</p> |
                    <p>Business</p>
                </div>

            </section>
        </article>

        <article onClick={handleArticleClick}
            className="main__article  sm:flex sm:flex-row flex   w-full sm:w-1/2 md:w-1/2 lg:w-full xl:w-full border-b border-gray-300 md:border-b-0 lg:border-b md:pr-4">
            <img className="main__article-image w-1/2 h-full  md:hidden" src="src/assets/images/news7.jpg" alt="article image"/>
            <section className="main__article-text-container w-1/2 md:w-full h-full md:h-1/2 lg:w-full lg:h-1/2 xl:w-full">
                <h2 className="main__article-title">US regulator says AI scanner 'deceived' users after BBC story</h2>
                <p className="main__article-text main__article-text-tablet-long">US weapons scanning company Evolv
                    Technology will be banned from
                    making unsupported claims about its products in a proposed settlement with the US government.

                    The company had claimed its AI scanner, used in the entrances of thousands of US schools,
                    hospitals and stadiums, could detect all weapons.

                    However BBC investigations showed these claims to be false.

                    Evolv said it has now reached an agreement with the Federal Trade Commission (FTC), but hasn’t
                    admitted wrongdoing.

                    The FTC said the action should be a warning to other AI companies.

                    “The FTC has been clear that claims about technology – including artificial intelligence – need
                    to be backed up”, said Samuel Levine, Director of the Bureau of Consumer Protection.

                    Evolv Technology’s mission is to replace metal detectors with AI weapons scanners.

                    It claims to do this with artificial intelligence, which can actively detect concealed weapons
                    like bombs, knives and guns.

                    The FTC’s complaint alleges the company deceptively advertised its scanners would detect “all
                    weapons”.

                    In 2022 the BBC outlined some of the impressive claims Evolv’s then CEO had made about the
                    technology.

                    "Metallic composition, shape, fragmentation - we have tens of thousands of these signatures, for
                    all the weapons that are out there," chief executive Peter George said in 2021. "All the guns,
                    all the bombs and all the large tactical knives."

                    However a BBC report in 2022 showed testing that had found Evolv’s system could not reliably
                    detect guns or bombs - after a freedom of information request from security-analysis company
                    IPVM.

                    Another BBC report in 2023 revealed details of a stabbing in a New York school where Evolv’s
                    weapons scanners were used.

                    “It truly, truly does not find knives” the then Superintendent of Utica Schools told the BBC.

                    And earlier this year the BBC reported that Evolv’s claims that the UK government had tested and
                    approved its technology were also false.

                    Under the US consumer watchdog's proposed settlement, Evolv will be banned from making
                    unsupported claims about its products’ ability to detect weapons and give some school customers
                    the option to cancel their contracts.

                    It will now go to a judge for approval.

                    A spokesperson for Evolv said that it had worked “collaboratively” with the agency.

                    “The FTC did not challenge the fundamental effectiveness of our technology and that the
                    resolution does not include any monetary relief” said Mike Ellenbogen, Interim President and CEO
                    of Evolv.

                    “To be clear, this inquiry was about past marketing language and not our system’s ability to add
                    value to security operations,” he said.

                    There is concern amongst officials in the US and UK about companies overstating the ability of
                    artificial intelligence to improve products. In some instances it’s unclear whether artificial
                    intelligence is being used at all.

                    The FTC has recently launched “Operation AI Comply” that targets companies making deceptive
                    claims about AI.</p>
                <div className="main__time-and-topic-container hidden md:flex">
                    <p>5 hrs ago</p> |
                    <p>Innovation</p>
                </div>

            </section>
        </article>
    </section>

</main>
  )
}
  */

export default News;
