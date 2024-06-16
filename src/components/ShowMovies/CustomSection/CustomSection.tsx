import { useState } from "react";
import { ResultType } from "../../../types/data";
import { IoClose } from "react-icons/io5";

const CustomSection = (props: { data: ResultType[]; title: string }) => {
  const [open, setOpen] = useState(false);
  const [selectedShow, setSelectedShow] = useState<null | ResultType>(null);
  const handleOpenPopup = (show: ResultType) => {
    setOpen(!open);
    setSelectedShow(show);
  };
  const handleClosePopup = () => {
    setOpen(false);
    setSelectedShow(null);
  };

  return (
    <>
      {open && selectedShow !== null && (
        <div className="absolute min-h-[100vh] h-fit top-0 bottom-0 right-0 left-0 bg-neutral-900 z-30 mt-[3vh] mx-[1vw] rounded-lg">
          {/* backdrop */}
          <div>
            <button
              className="absolute right-5 top-5 z-30"
              onClick={handleClosePopup}
            >
              <IoClose className="size-8 rounded-full bg-neutral-800 p-1" />
            </button>
            <div className="w-full h-full relative">
              <img
                src={`https://image.tmdb.org/t/p/original/${selectedShow.backdrop_path}`}
                alt=""
                className="rounded-t-lg bg-faded aspect-video"
              />
              <span className="absolute top-[60%] left-[5%] text-3xl">
                Test
              </span>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              perspiciatis dicta repellendus dolores dignissimos, minima quod.
              Commodi possimus voluptate harum aspernatur nostrum dicta? Quis
              iusto ducimus alias cum recusandae. Accusantium! Ullam, commodi
              tempore. Voluptatibus sint illum a! Repellat nisi porro rerum
              necessitatibus praesentium est assumenda animi, voluptates
              perspiciatis dignissimos quas molestiae debitis nam? Voluptates
              architecto aspernatur nisi ab incidunt dolorum. Recusandae animi
              itaque ut alias libero maxime odit earum mollitia blanditiis,
              dolorem at fuga, ratione aliquam expedita beatae sequi natus
              veniam ad iusto dicta nesciunt quam! Soluta nobis voluptatum
              deleniti? Sit laborum non delectus itaque nihil accusantium sunt
              cupiditate, placeat ut quis dolor officiis nulla qui suscipit
              ipsam beatae dignissimos quisquam velit expedita quaerat a
              nesciunt maiores. Beatae, dolores nam? Praesentium eos nemo
              molestiae consequatur iste sequi iure quia, maxime a quasi facilis
              cumque modi doloribus expedita nihil voluptas temporibus eveniet
              amet dolorem pariatur optio dicta, ab ex illo! Repudiandae. Ipsam,
              inventore amet. Quam, quos accusamus? Perferendis, iste dolor
              atque explicabo exercitationem maxime totam beatae enim molestiae
              repellat, veniam, veritatis quia temporibus voluptas. Qui, facere
              pariatur eum optio beatae dolore? Temporibus delectus atque
              obcaecati rerum, sit natus dolores maiores quam odio culpa dolorem
              doloremque architecto, incidunt fugit modi corporis labore
              repudiandae enim? Minima inventore autem laudantium nesciunt modi
              adipisci sunt. Voluptate nulla minima sit vero? Vel sint mollitia
              commodi libero necessitatibus doloribus corrupti cumque
              praesentium fugiat ab maiores id et natus amet, iste excepturi
              odit voluptate laborum totam debitis distinctio. Libero commodi
              veritatis non totam, temporibus rem! Blanditiis ducimus adipisci
              rem velit accusantium nostrum odit dolorem ab debitis. Nam
              officiis minus reiciendis recusandae porro dicta ratione ipsam,
              rerum nesciunt perferendis. Labore consequuntur cum cupiditate
              aliquid nam ipsum tenetur architecto rerum omnis modi. Praesentium
              cupiditate quod ex eos error qui, fuga quidem ea consequuntur
              fugiat commodi! Necessitatibus maiores nostrum pariatur aliquid!
              Consectetur assumenda vitae officiis blanditiis minima saepe
              doloremque id adipisci, perferendis molestias aperiam nisi
              laboriosam ex libero nulla distinctio labore quam natus alias.
              Quas eveniet accusantium inventore voluptas cumque iure? Doloribus
              ullam dolorum impedit deserunt, optio vel illo atque aliquam
              suscipit voluptatum sapiente quasi, nam nulla vero reiciendis
              ipsum labore aut tenetur nostrum quidem illum debitis deleniti.
              Illum, fugiat accusantium. Placeat beatae consequuntur quibusdam
              deserunt vel unde eligendi omnis nemo. Dolor itaque voluptate
              explicabo nam ipsa corporis hic tempora quisquam sint sed? Impedit
              earum laborum voluptas ut quidem et repudiandae! Reiciendis saepe
              odit et minus, voluptas adipisci voluptates assumenda iusto non
              optio nemo eligendi voluptatibus corporis expedita soluta atque!
              Iusto veniam distinctio voluptas modi esse? Libero voluptatum
              dignissimos aperiam voluptates. Eum aliquid sapiente debitis
              aperiam expedita vel sit, deleniti alias aliquam nobis soluta in
              numquam tempore dignissimos ipsum voluptatibus fugit nisi
              necessitatibus unde dolores. Quo ad et suscipit perspiciatis nisi?
              Nemo itaque nesciunt facere explicabo neque minima voluptatibus
              unde. Minus aut quidem sapiente suscipit aspernatur, reiciendis
              eum! Recusandae ratione itaque quidem modi eaque beatae,
              exercitationem quae tempora, praesentium, perspiciatis deserunt.
              Necessitatibus dolores modi id possimus dolor soluta tempore alias
              nihil. Amet earum atque officia, similique error quidem cumque
              quae, vel dolorem quam provident facilis. Libero repellendus
              aspernatur sit adipisci harum. Est error ipsa earum iste
              laboriosam placeat totam facilis ducimus incidunt quae minima quos
              vero reiciendis autem, adipisci necessitatibus quidem. Cumque
              culpa corrupti neque incidunt omnis explicabo, maiores rem
              eligendi. Alias vitae tempora iure consectetur impedit neque
              numquam vel, expedita ipsum sit facere optio quis dicta esse
              suscipit ea voluptates hic laboriosam id necessitatibus ipsa
              cupiditate. Ex facilis amet libero. Vero error ea saepe aspernatur
              distinctio sint atque rerum! Deleniti iure, eos nobis ipsum ex
              quibusdam dolorem repellat voluptate odit veniam dignissimos dicta
              pariatur iste libero fugiat sunt voluptatem dolorum! Voluptatem
              dignissimos, ducimus at cupiditate accusantium illum quasi quis ea
              quia ipsa sit ipsam eum laudantium autem quibusdam molestias
              architecto dolor sequi debitis iste minima aut? Placeat nemo ipsum
              perspiciatis. Vero ab vitae, vel illo ipsa quaerat nemo fugit
              saepe? Ipsa, laborum est, voluptates aspernatur quis repellat
              sequi magnam aliquid distinctio dolor error facere doloremque vel
              nobis. Eligendi, dolor dolore! Quos autem suscipit error
              repudiandae placeat dolorum, eligendi reprehenderit tempore
              perspiciatis atque, quidem odio cumque! Perspiciatis iusto nobis,
              beatae quos, modi magni reiciendis commodi provident soluta quo
              rem. Commodi, asperiores. Aperiam eligendi nemo facilis doloribus
              voluptatem quo odio, maxime atque labore nobis quas officia esse
              deserunt ipsa blanditiis praesentium fugit ullam, ex cupiditate
              consequuntur tenetur quaerat ipsum! Exercitationem, nostrum
              dolore. Ab tempora placeat hic laudantium ad quod inventore
              sapiente voluptas, ullam nostrum beatae pariatur suscipit, illo
              veniam adipisci laboriosam repudiandae molestias quas labore sed.
              Nulla expedita laborum rerum odio aut? Nam, reprehenderit facere
              optio nemo eaque, corporis ea enim, provident eum dignissimos
              labore! Perferendis perspiciatis animi delectus cupiditate sunt
              vitae dolore? Illo corrupti, et rem maxime ut iure minus ipsam.
              Culpa ipsa quia temporibus expedita placeat praesentium minima
              eveniet quaerat impedit suscipit maxime, aliquam, eius odit facere
              numquam mollitia saepe explicabo molestias ab quam dolor itaque
              totam doloremque? Sit, aspernatur. Placeat illum dolorem id quae
              sapiente explicabo expedita atque nulla quia tempore aperiam
              tempora voluptatum, error sunt magni nam a veritatis? Aperiam
              magni velit inventore eaque voluptas cumque libero quis. Sit id
              velit nostrum quis, at labore voluptas ullam corporis repellat
              architecto saepe nobis libero impedit expedita, alias qui. Fugit
              earum similique nobis repellat, dolorum recusandae quos quasi quas
              illo. Fugit, nam sapiente ab adipisci eum qui laudantium rerum.
              Adipisci necessitatibus, doloribus atque impedit eligendi
              repudiandae. Ipsam praesentium a vitae quo dolore provident sequi,
              eaque rerum nam impedit ducimus minima?
            </p>
          </div>
        </div>
      )}
      <section className="ml-4 lg:ml-12 z-20 backdrop-blur-[1px] mb-6">
        <h1 className="font-semibold text-lg lg:text-xl xl:text-2xl 2xl:text-3xl my-2">
          {props.title}
        </h1>
        <div className="overflow-visible overflow-x-scroll hide-scrollbar relative">
          <button className="absolute left-0 h-full p-4 rounded-tl-md rounded-bl-md z-30 text-xl font-bold text-transparent bg-transparent hover:bg-black/30 hover:text-white transition-all">
            {"<"}
          </button>
          <ul className="flex justify-between gap-[1vw]">
            {props.data.map((show, index) => {
              return (
                <>
                  <li
                    key={`show-${index}`}
                    className="w-1/2 flex-shrink-0 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 rounded-lg"
                  >
                    <button
                      type="button"
                      className="relative flex items-center"
                      onClick={() => handleOpenPopup(show)}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/original/${props.data[index].backdrop_path}`}
                        alt=""
                        className="aspect-[16/9] object-center object-fill rounded-lg"
                      />
                      <span className="absolute top-1/2 left-1/2 text-xl xl:text-2xl 2xl:text-3xl drop-shadow-default text-wrap break-words w-9/12 text-left text-white translate-x-[-50%] translate-y-[-50%]">
                        {show.original_name
                          ? show.original_name
                          : show.original_title}
                      </span>
                    </button>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default CustomSection;
