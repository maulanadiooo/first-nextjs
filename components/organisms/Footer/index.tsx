import Image from "next/image";
import FooterListItem from "../../molecules/Footer";
import HeadTitleFooter from "../../molecules/Footer/HeadTitle";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/icon/logo.svg" width={60} height={60} alt="Logo" />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br />
                untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <HeadTitleFooter headTitle="Company" />
                  <ul className="list-unstyled">
                    <FooterListItem title="About Us" />
                    <FooterListItem title="Press Release" />
                    <FooterListItem title="Terms of Use" />
                    <FooterListItem title="Privacy & Policy" />
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <HeadTitleFooter headTitle="Support" />
                  <ul className="list-unstyled">
                    <FooterListItem title="Refund Policy" />
                    <FooterListItem title="Unlock Rewards" />
                    <FooterListItem title="Live Chatting" />
                    <FooterListItem title="Refund Policy" />
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <HeadTitleFooter headTitle="Connect" />
                  <ul className="list-unstyled">
                    <FooterListItem title="hi@store.gg" />
                    <FooterListItem title="team@store.gg" />
                    <FooterListItem title="Padang, Sumatera Barat" />
                    <FooterListItem title="021-123456789" />
                    <FooterListItem title="hi@store.gg" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
