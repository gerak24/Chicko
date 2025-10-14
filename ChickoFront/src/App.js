import HomePage from "./pages/HomePage";
import React, {useLayoutEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/СartPage"
import AuthPage from "./pages/AuthPage";
import NomencPage from "./pages/NomencPage";
import OrdersPage from "./pages/OrdersPage";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";


function App() {
  const queryClient = new QueryClient()
  return (<>
      <Toaster/>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path={"/"} element={<HomePage/>}/>
          <Route path={"/contact"} element={<ContactPage/>}/>
          <Route path={"/catalog"} element={<CatalogPage/>}/>
          <Route path={"/cart"} element={<CartPage/>}/>
          <Route path={'/auth'} element={<AuthPage/>}/>
          <Route path={'/auth/nomenc'} element={<NomencPage/>}/>
          <Route path={'/auth/orders'} element={<OrdersPage/>}/>
        </Routes>
      </QueryClientProvider>
    </>

  );
}

export function GetProduction() {
  return [{
    id: "1c52650e-733b-4dc0-b2b2-8e24476a7ddc",
    name: "Она ждала тебя",
    hotspot: false,
    description:
      "Лимонад со вкусом земляники, каркаде и лемонграсса.",
    image: "https://avatars.mds.yandex.net/get-sprav-products/13059590/2a0000018f2412284c118f455287eeb73eef/M_height",
    price: 300
  }, {
    id: "06a3eb35-37c6-4980-ae69-e8818864f352",
    name: "Shut Down",
    hotspot: true,
    description: "Лимонад со вкусом малины и мяты и невероятно нежным домашним клубничным вареньем.",
    image: "https://avatars.mds.yandex.net/get-sprav-products/4322053/2a00000191ea0934e19ec932bac487096061/M_height",
    price: 305
  }, {
    id: "987836c4-a6ba-4db2-8512-4586b2741bd6",
    name: "Хозяин реки",
    hotspot: false,
    description: "Дракон Хаку оставил след в сердце Тихиро, а наш кисло-сладкий лимонад оставит след в вашем сердце! Тропическое сочетание сиропа блю кюрасао, лимона и волшебных пузырьков",
    image: "https://avatars.mds.yandex.net/get-sprav-products/1540730/2a00000191ea09350ac47ba7c6798f8284e3/M_height",
    price: 300
  }, {
    id: "aee95790-cb39-4782-ac74-184b75b4eae3",
    name: "Владения Тоторо",
    hotspot: false,
    description: "Банан в сочетании с клубничным вареньем, сладость которого разбавляет чарующая матча",
    image: "https://avatars.mds.yandex.net/get-sprav-products/2733259/2a00000191ea093593285f32059a15c2b511/M_height",
    price: 280
  }, {
    id: "2359410c-bff3-4ee7-a25d-386469fe8c3f",
    name: "Maknae on top",
    hotspot: true,
    description: "Яркий и необычный лимонад от малыша Чонина. Свежий вкус арбуза с нотками лимона, лайма и каркаде",
    image: "https://avatars.mds.yandex.net/get-sprav-products/5393394/2a00000191ea093558f63ec97bfaedcb0d2a/M_height",
    price: 280
  }, {
    id: "4b0252bd-79e5-484a-86d0-fbc9095b97bd",
    name: "Кофейная любовь Чонён",
    hotspot: false,
    description: "Напиток для настоящей мамы TWICE - Чонён. Свежее сочетание клубники и миндального кофе",
    image: "https://avatars.mds.yandex.net/get-sprav-products/13488316/2a0000018ffaf26d41d50a0da9e257940a51/M_height",
    price: 290
  }, {
    id: "74015e5d-97ab-4984-b443-78447cc92bb2",
    name: "Чорипон",
    hotspot: false,
    description: "Трендовый корейский молочный шейк с хрустящей, воздушной пшеницей. Попробуй любимый напиток твоей корейской онни.",
    image: "https://avatars.mds.yandex.net/get-sprav-products/4322053/2a00000191ea09347b389bedbbcf7fb067f3/M_height",
    price: 320
  }, {
    id: "95a365c2-de52-4a83-9214-d685a8790891",
    name: "Корейский сендвич Орео и банан",
    hotspot: true,
    description: "Тостовый хлеб с крем-чизом, заварным кремом, бананом и печеньем Орео.",
    image: "https://avatars.mds.yandex.net/get-sprav-products/11530991/2a0000018fe5274e31293af316543bceadc6/M_height",
    price: 360
  }, {
    id: "6e6a0dde-a0b0-4430-89fe-230bc769ea95",
    name: "Корейский сендвич киви и мандарин",
    hotspot: false,
    description: "Тостовый хлеб с крем-чизом, заварным кремом и спелыми фруктами.",
    image: "https://avatars.mds.yandex.net/get-sprav-products/4079840/2a00000191ea0932bd518aa72397e16fe646/M_height",
    price: 360
  }, {
    id: "1cf76fd6-0c37-4ff1-88bf-3782a0c52a0b",
    name: "Пуноппан заварной крем",
    hotspot: false,
    description: "Вафля из пшеничного теста в форме рыбки с заварным кремом. Подается со сгущенным молоком",
    image: "https://avatars.mds.yandex.net/get-sprav-products/10324913/2a0000018ffaf26d151fbffe6e8c1b4e909c/M_height",
    price: 210
  }, {
    id: "d8cee003-2c1b-4e5d-ac50-a9f44699ca0a",
    name: "Карри райс",
    hotspot: false,
    description: "Японский карри с курицей и картофелем фри. Подается с рисом в форме уточки.",
    image: "https://avatars.mds.yandex.net/get-sprav-products/13055270/2a0000018f24122b357b3d6aecd17b05acc5/M_height",
    price: 410
  }, {
    id: "de526fb1-e170-4fd8-a2ff-c95cd33e461a",
    name: "Эноки острые в соусе кочучжан",
    hotspot: false,
    description: "Хрустящие грибы прямиком из Кореи, обжаренные в соусе кочучжан.  Острое блюдо",
    image: "https://avatars.mds.yandex.net/get-sprav-products/10324913/2a0000018ffaf26d4158d2386622376951df/M_height",
    price: 445
  }, {
    id: "55eff855-5f55-4305-8f2d-0901c9aae415",
    name: "Эноки неострые в соусе пулькоги",
    hotspot: false,
    description: "Хрустящие грибы прямиком из Кореи, обжаренные в соусе пулькоги.",
    image: "https://avatars.mds.yandex.net/get-sprav-products/8331772/2a0000018ffaf26cc27fdeff6761e4ada4a7/M_height",
    price: 445
  }, {
    id: "087d27b4-2bc7-4a34-8b9a-18e735d15457",
    name: "Эноки в кисло-сладком соусе",
    hotspot: false,
    description: "Хрустящие грибы прямиком из Кореи, обжаренные в кисло-сладком соусе",
    image: "https://avatars.mds.yandex.net/get-sprav-products/5392818/2a0000018ffaf26d3d9e842881069f70b27d/M_height",
    price: 445
  }, {
    id: "5b42e8d3-6dac-4ae6-bcf6-d95d793d19fe",
    name: "Жареный чиз рамен с говядиной",
    hotspot: false,
    description: "Корейская лапша в сырном бульоне, обжаренная с говядиной, луком и сыром",
    image: "https://avatars.mds.yandex.net/get-sprav-products/2773996/2a00000192ab3d6a2c9380d51998349c87e7/M_height",
    price: 510
  }, {
    id: "ec999dfc-d9cd-4669-9484-c2cf2d467da9",
    name: "Rose токпокки",
    hotspot: true,
    description: "Корейские рисовые клецки в сливочно-остром соусе с овощами. Блюдо украшается сыром и белым кунжутом",
    image: "https://avatars.mds.yandex.net/get-sprav-products/13488316/2a00000191ea09343f91b32b44e853cd00b2/M_height",
    price: 470
  }, {
    id: "28d93aca-cc7a-4d43-9fa5-185c03778c92",
    name: "Карбонара токпокки",
    hotspot: false,
    description: "Корейские рисовые клецки в сочетании с беконом, сливками и пармезаном",
    image: "https://avatars.mds.yandex.net/get-sprav-products/11530991/2a00000191ea09301736faf7f76f44c0f4a6/M_height",
    price: 470
  }, {
    id: "c95d882c-a4db-47a3-836a-351d2841b748",
    name: "Токпокки классические",
    hotspot: false,
    description: "Рисовые клецки в соусе кочучжан с капустой и болгарским перцем. Украшается тягучим сыром сулугуни и белым кунжутом.  Острое блюдо",
    image: "https://avatars.mds.yandex.net/get-sprav-products/2790747/2a00000191ea09325dbde9097e62d671e85f/M_height",
    price: 470
  }, {
    id: "223d7ae5-a1dc-4689-a61f-739b55cc9ec9",
    name: "Чиз-токпокки",
    hotspot: false,
    description: "Популярное блюдо в Южной Корее, которое готовят из рисовых клецок и сырного соуса.",
    image: "https://avatars.mds.yandex.net/get-sprav-products/13488316/2a00000190086022d80be98f32424bf4804f/M_height",
    price: 470
  }, {
    id: "49d240f1-2573-45a1-998a-b04bdb4a6f1d",
    name: "Острая курица с пампушками",
    hotspot: false,
    description: "Бульдак чикен, кимпаб с курицей, корейские салаты и булочка бао на закуску. Подаётся с острым соусом. Острое блюдо",
    image: "https://avatars.mds.yandex.net/get-sprav-products/5567679/2a0000019016804531b85a7ea6bf99c4e302/M_height",
    price: 650
  }, {
    id: "16b7bd1f-23ac-4d75-981c-7d2626123402",
    name: "Пулькоги с пампушками",
    hotspot: true,
    description: "Cочный набор, сочетающий в себе говядину в соусе пульгоги, кимпаб с курицей, корейские салаты и булочку бао на закуску. Подаётся с острым соусом",
    image: "https://avatars.mds.yandex.net/get-sprav-products/13055270/2a0000018f24113e568ff4cdba7ab11b9895/M_height",
    price: 650
  }]
}

export function GetHotProduction() {
  return GetProduction().filter(x => x.hotspot === true)
}

export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default App;
