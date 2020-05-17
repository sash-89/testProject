import React, {createRef} from 'react';
import style from './ScrollBlock2.module.css';


class ScrollBlock2 extends React.Component {
    constructor(props) {
        super(props);
        this.scrollBlockRef2 = createRef();
    }
    state={
        transform: 0,
    };

    componentDidMount() {
        window.addEventListener('scroll', this.BlockScrolling)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.BlockScrolling);
    }

    BlockScrolling = () => {
        window.pageYOffset > 447 ? this.setState({transform: 447}) : this.setState({transform: window.pageYOffset});

        this.scrollBlockRef2.current.style.cssText = `
                transform: translateY(${this.state.transform}px);  
        `;
    };





    render() {

        return (
            <div className={style.Container}>
                <div className={style.Main}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquid animi,
                        blanditiis, consectetur dicta dolores ducimus excepturi fugit ipsum iste itaque libero minima
                        mollitia numquam perspiciatis praesentium ratione vero.
                    </div>
                    <div>A ab aliquid corporis debitis dicta fuga id labore, minima natus neque nihil recusandae
                        voluptatem.
                        Ad assumenda cumque doloremque enim eum, exercitationem fugit iusto labore, molestiae non quas
                        similique veniam.
                    </div>
                    <div>Consectetur consequatur dolor nihil pariatur praesentium quod vel. Animi, at atque molestiae
                        necessitatibus non numquam quidem soluta sunt suscipit vitae. Alias assumenda beatae laborum
                        nihil
                        optio perspiciatis porro quia velit.
                    </div>
                    <div>Ad asperiores beatae consequatur culpa debitis eaque eligendi excepturi explicabo harum id ipsa
                        ipsum iste nisi nobis odio, quibusdam recusandae sint sunt tenetur voluptas. Corporis earum hic
                        ratione. Aliquam, enim.
                    </div>
                    <div>Aliquid aperiam atque autem, blanditiis commodi dolor, eos inventore ipsa ipsam iure laborum
                        maxime
                        non omnis optio porro possimus quaerat quis ratione sapiente sequi tenetur totam voluptate
                        voluptatum. Error, inventore?
                    </div>
                    <div>Ad aliquid animi, architecto deleniti dignissimos eligendi in incidunt laudantium nam nesciunt
                        nisi
                        nobis nostrum odio pariatur perspiciatis quibusdam quod recusandae repellat repellendus rerum
                        similique totam velit voluptas voluptatibus voluptatum!
                    </div>
                    <div>A ad amet architecto aspernatur commodi cupiditate debitis, dignissimos distinctio doloribus
                        eligendi, harum laboriosam modi mollitia necessitatibus nihil odit, quam quasi qui quos saepe ut
                        vero vitae voluptatibus. Non, quo.
                    </div>
                    <div>Architecto at aut cumque debitis ea impedit nesciunt unde! Asperiores consectetur consequatur
                        corporis cum doloremque dolorum eos excepturi facilis in ipsum magnam molestiae nam,
                        perspiciatis
                        repellat sapiente similique vel voluptates.
                    </div>
                    <div>Culpa, modi, nihil! Aspernatur dolorem eos laudantium officia quibusdam sunt vel? Eaque illo
                        incidunt magni natus nulla qui reiciendis sed tenetur velit voluptates. Aliquid animi
                        consequatur in
                        odio quidem velit.
                    </div>
                    <div>Commodi, dolorum harum illo numquam quaerat quibusdam sapiente temporibus? Aliquid amet
                        blanditiis
                        dicta distinctio dolores, doloribus eius exercitationem maxime, nemo, porro praesentium ratione
                        recusandae totam unde vel vitae voluptatum. Debitis.
                    </div>
                    <div>A beatae cumque ea hic laboriosam necessitatibus obcaecati quis sint sit ullam! Cupiditate
                        dolor ex
                        inventore iure iusto maiores minus pariatur possimus quas reiciendis sunt suscipit, ullam vero
                        voluptate voluptatibus!
                    </div>
                    <div>Architecto aut autem consequatur culpa cum cumque cupiditate delectus ducimus eaque eius eos
                        eum
                        expedita facilis id, impedit in laboriosam maiores non odio pariatur ratione recusandae, rem
                        repellat similique voluptatibus.
                    </div>
                    <div>At, error vel. A aspernatur culpa debitis esse, id labore laudantium molestias nam officia
                        perspiciatis quas, quis sed sunt veritatis voluptatibus! Cum doloribus eos et fuga iste iusto
                        laborum numquam?
                    </div>
                    <div>Ad aliquid aperiam autem beatae consectetur consequatur cumque debitis deserunt dolorem hic
                        incidunt laboriosam maxime, modi molestiae natus officiis quidem repellendus sint tempora
                        temporibus
                        tenetur totam velit veniam vero voluptate.
                    </div>
                    <div>Aliquam autem beatae deleniti eaque est exercitationem expedita inventore magni natus nemo
                        nesciunt, obcaecati perferendis porro quas quo sapiente sed similique, vero! Accusamus aliquid
                        explicabo facere, impedit ipsam ut vero.
                    </div>
                    <div>Amet, asperiores beatae culpa cum dolore exercitationem explicabo illum inventore ipsum maiores
                        minus, molestiae molestias nobis perspiciatis qui quibusdam tempora veniam vitae voluptates
                        voluptatum. Ea enim natus repellat reprehenderit voluptas!
                    </div>
                    <div>Dolore eius fugiat non quos. Animi blanditiis ducimus eligendi, eos harum in nam nulla numquam
                        officia, omnis provident quam recusandae sequi sint voluptatum. Culpa doloremque ducimus, non
                        numquam quidem temporibus.
                    </div>
                    <div>Aliquam autem beatae deleniti eaque est exercitationem expedita inventore magni natus nemo
                        nesciunt, obcaecati perferendis porro quas quo sapiente sed similique, vero! Accusamus aliquid
                        explicabo facere, impedit ipsam ut vero.
                    </div>
                    <div>Amet, asperiores beatae culpa cum dolore exercitationem explicabo illum inventore ipsum maiores
                        minus, molestiae molestias nobis perspiciatis qui quibusdam tempora veniam vitae voluptates
                        voluptatum. Ea enim natus repellat reprehenderit voluptas!
                    </div>
                    <div>Dolore eius fugiat non quos. Animi blanditiis ducimus eligendi, eos harum in nam nulla numquam
                        officia, omnis provident quam recusandae sequi sint voluptatum. Culpa doloremque ducimus, non
                        numquam quidem temporibus.
                    </div><div>Aliquam autem beatae deleniti eaque est exercitationem expedita inventore magni natus nemo
                    nesciunt, obcaecati perferendis porro quas quo sapiente sed similique, vero! Accusamus aliquid
                    explicabo facere, impedit ipsam ut vero.
                </div>
                    <div>Amet, asperiores beatae culpa cum dolore exercitationem explicabo illum inventore ipsum maiores
                        minus, molestiae molestias nobis perspiciatis qui quibusdam tempora veniam vitae voluptates
                        voluptatum. Ea enim natus repellat reprehenderit voluptas!
                    </div>
                    <div>Dolore eius fugiat non quos. Animi blanditiis ducimus eligendi, eos harum in nam nulla numquam
                        officia, omnis provident quam recusandae sequi sint voluptatum. Culpa doloremque ducimus, non
                        numquam quidem temporibus.
                    </div>
                    <div>A consectetur consequuntur eaque ex excepturi minus officiis perspiciatis placeat quae
                        sapiente.
                        Dolor incidunt, magnam necessitatibus nulla quasi quos sunt unde vero? Blanditiis eaque illo
                        laboriosam, perferendis rem sunt totam.
                    </div>
                    <div>Cum eligendi esse facere iure nihil? Adipisci beatae dolor eveniet fuga hic laborum
                        necessitatibus
                        officiis perspiciatis, provident tempore! At cumque dolorem eius, eum eveniet reprehenderit
                        temporibus! Ad neque quo unde.
                    </div>
                    <div>Adipisci architecto assumenda, aut eius eligendi eos, in, ipsum repellendus sint sit suscipit
                        tempora voluptates. Beatae cum, debitis dolor illo illum nemo, neque praesentium sit unde ut
                        veniam
                        voluptates, voluptatum.
                    </div>
                    <div>Ad aliquid, animi corporis culpa debitis ea, facilis hic illo in inventore molestiae molestias
                        nam
                        nemo nulla obcaecati officia pariatur perspiciatis possimus praesentium provident quo saepe sed
                        soluta, totam unde.
                    </div>
                    <div>Accusamus alias aliquid atque consectetur doloremque eligendi et ex expedita incidunt,
                        molestias
                        nemo, nihil numquam officiis omnis porro, qui quia repellendus repudiandae tenetur vitae. Natus
                        nulla sed voluptatibus. Cumque, mollitia?
                    </div>
                    <div>Adipisci aspernatur dolores eum fugiat, harum illo laborum maxime quia quisquam rem
                        repellendus,
                        sint tempore voluptas? Eius et hic incidunt nemo perferendis porro quia reprehenderit. Culpa
                        exercitationem ipsum perspiciatis voluptates.
                    </div>
                    <div>Assumenda dolorum minima obcaecati perferendis sequi sunt tenetur. Eveniet explicabo fuga fugit
                        minus ratione repellat sit tempora unde voluptas. Accusantium amet doloremque dolores libero,
                        nam
                        perspiciatis porro quae saepe ut!
                    </div>
                    <div>Hic, quas recusandae! Aut beatae cumque cupiditate deleniti doloribus eos eveniet ex excepturi
                        harum in iste maiores maxime non quam, quis quisquam rerum sequi sint suscipit tempore
                        voluptatem
                        voluptates voluptatum.
                    </div>
                </div>
                <div className={style.Container1}>
                    <aside className={style.RightAside} ref={this.scrollBlockRef2} >RightAside

                    </aside>
                </div>

            </div>
        )
    }
}

export default ScrollBlock2;
