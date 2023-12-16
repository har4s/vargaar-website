"use client";
import React from 'react'
import Image from 'next/image';
import s from "./coffee-type-product.module.css"
import { cn } from 'lib/utils';
import { Price } from 'ui/price';
import { Button } from 'ui';

interface Props {
    className?: string
}

export const CoffeeTypeProduct: React.FC<Props> = ({ className }) => {
    return (
        <article className={cn(s.root, className)}>
            <div className={s.wrapper}>
                <div className={s.hero}>
                    <div className={s.imageContainer}>
                        <Image
                            className={s.image}
                            src="/bio-nature-0x600-c-default.png"
                            alt=''
                            width={600}
                            height={600}
                        />
                    </div>
                    <div className={s.Container}>
                        <div className={s.headline}>
                            <h1 className={s.title}>
                                میکس قهوه 70/30 عربیکا
                            </h1>
                            <div className={s.labels}>
                                {labels.map((label, idx) => (
                                    <label.icon key={idx} className={s.label} />
                                ))}
                            </div>
                        </div>
                        <div className={s.details}>
                            <Price className={s.price} amount='2500000' />
                            <div className={s.pose}>
                                <p>
                                    محصولی 100% گیاهی بدون قند افزوده*. این گیاه توسط کارخانه های کاشت ما در مناطق کاشت واقع در Hauts-de-France، نزدیک به محل تولید ما، کشت شد.
                                </p>
                            </div>
                            <div className={s.actions}>
                                <Button className={s.button}>افزودن به سبد خرید</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.description}>
                </div>
            </div>
        </article>
    )
}

const labels = [
    {
        icon: (props: any) => (
            <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none" {...props}>
                <path d="M42.8758 84.2478C19.6467 84.2478 0.751953 65.3531 0.751953 42.1239C0.751953 18.8947 19.6467 0 42.8758 0C66.105 0 84.9997 18.8947 84.9997 42.1239C84.9997 65.3531 66.105 84.2478 42.8758 84.2478ZM42.8758 1.46433C20.457 1.46433 2.21628 19.705 2.21628 42.1239C2.21628 64.5428 20.457 82.7835 42.8758 82.7835C65.2947 82.7835 83.5354 64.5428 83.5354 42.1239C83.5354 19.705 65.2947 1.46433 42.8758 1.46433Z" fill="#7F1716"></path>
                <path d="M15.8057 49.5089V49.4797C15.8057 46.3411 18.2023 43.8859 21.4629 43.8859C23.6594 43.8859 25.0749 44.8085 26.0267 46.1166L23.7814 47.8543C23.1664 47.1026 22.4586 46.5949 21.4287 46.5949C19.9204 46.5949 18.8612 47.8884 18.8612 49.4553V49.4845C18.8612 51.1002 19.9204 52.3595 21.4287 52.3595C22.5514 52.3595 23.2103 51.8372 23.8595 51.0514L26.1048 52.6524C25.0895 54.0533 23.7228 55.0832 21.3555 55.0832C18.2804 55.0832 15.8057 52.7305 15.8057 49.5187V49.5089Z" fill="#7F1716"></path>
                <path d="M27.3984 44.0958H30.3808V52.2423H35.5938V54.8537H27.3984V44.0909V44.0958Z" fill="#7F1716"></path>
                <path d="M36.8867 44.0958H45.5409V46.6193H39.8398V48.2642H45.004V50.6169H39.8398V52.3253H45.619V54.8635H36.8867V44.1007V44.0958Z" fill="#7F1716"></path>
                <path d="M50.8763 44.0226H53.7513L58.3298 54.8586H55.1327L54.3663 52.9208H50.1979L49.4315 54.8586H46.3125L50.8763 44.0226ZM53.4877 50.6023L52.287 47.5565L51.0716 50.6023H53.4877Z" fill="#7F1716"></path>
                <path d="M59.3789 44.0958H62.1611L66.5883 49.7823V44.0958H69.5414V54.8586H66.9446L62.332 48.9574V54.8586H59.3789V44.0958Z" fill="#7F1716"></path>
                <path d="M17.5723 56.7817H20.5546V64.9282H25.7677V67.5396H17.5723V56.7768V56.7817Z" fill="#7F1716"></path>
                <path d="M30.7806 56.7085H33.6556L38.2341 67.5446H35.0369L34.2706 65.6067H30.1022L29.3358 67.5446H26.2168L30.7806 56.7085ZM33.392 63.2882L32.1913 60.2424L30.9759 63.2882H33.392Z" fill="#7F1716"></path>
                <path d="M39.2832 56.7817H44.8037C46.1558 56.7817 47.1076 57.1185 47.7421 57.7335C48.1717 58.1777 48.4353 58.7488 48.4353 59.4858V59.5151C48.4353 60.7598 47.7275 61.4968 46.7757 61.9117C48.0838 62.3412 48.9136 63.0783 48.9136 64.5426V64.5719C48.9136 66.417 47.4054 67.5396 44.8379 67.5396H39.2881V56.7768L39.2832 56.7817ZM45.4919 60.1008C45.4919 59.5004 45.0136 59.1783 44.1399 59.1783H42.1875V61.0673H44.0618C44.9697 61.0673 45.4919 60.7598 45.4919 60.1301V60.1008ZM44.462 63.1613H42.1875V65.143H44.4913C45.4139 65.143 45.9215 64.7916 45.9215 64.157V64.1277C45.9215 63.542 45.4578 63.1613 44.462 63.1613Z" fill="#7F1716"></path>
                <path d="M50.2803 56.7818H58.9345V59.3053H53.2333V60.9502H58.3975V63.3029H53.2333V65.0113H59.0126V67.5495H50.2803V56.7867V56.7818Z" fill="#7F1716"></path>
                <path d="M60.5498 56.7817H63.5322V64.9282H68.7452V67.5396H60.5498V56.7768V56.7817Z" fill="#7F1716"></path>
                <path d="M53.6972 25.8259C52.7552 25.5038 51.8961 25.3427 51.1298 25.3573C50.3585 25.372 49.5776 25.5038 48.7917 25.7576C48.001 26.0114 47.342 26.2896 46.81 26.5922C46.278 26.8998 45.7655 27.2463 45.2676 27.6368C44.7697 28.0273 44.4427 28.3006 44.2816 28.4519C44.1205 28.6033 44.0034 28.7253 43.9253 28.8229C44.5891 27.0169 45.0723 25.1377 45.3798 23.1901L45.7166 23.2487C45.9412 23.2877 46.2487 23.317 46.644 23.3365C47.0345 23.3561 47.4836 23.361 47.9863 23.3561C48.4891 23.3512 49.0211 23.2877 49.5776 23.1657C50.134 23.0486 50.6954 22.8875 51.2616 22.6874C51.8278 22.4872 52.3647 22.1846 52.8821 21.7795C53.3995 21.3743 53.8632 20.9009 54.2683 20.3542C54.6735 19.8124 55.0054 19.1144 55.2641 18.2748C55.5228 17.4304 55.6692 16.4932 55.6936 15.4585C54.7906 15.1558 53.912 14.9947 53.0578 14.9801C52.2036 14.9655 51.4568 15.0631 50.8271 15.2681C50.1975 15.4731 49.5873 15.7708 49.0065 16.1564C48.4256 16.5421 47.9522 16.9081 47.591 17.2596C47.2346 17.611 46.8978 17.9966 46.5855 18.4164C46.2731 18.8362 46.0729 19.1193 45.9802 19.2706C45.8875 19.4219 45.8191 19.5439 45.7801 19.6367C45.7947 19.2901 45.7996 18.8166 45.7996 18.2114C45.7996 17.6061 45.7947 17.2742 45.7801 17.2059L45.9216 16.9081C46.029 16.708 46.1413 16.4298 46.2584 16.0735C46.3756 15.7123 46.5025 15.3023 46.6392 14.8385C46.7758 14.3748 46.8588 13.8672 46.8979 13.3156C46.9369 12.7641 46.9418 12.1979 46.9076 11.6121C46.8735 11.0264 46.7368 10.4358 46.4976 9.8403C46.2584 9.24481 45.9412 8.6786 45.5409 8.14656C45.1407 7.61452 44.5842 7.10689 43.8569 6.62366C43.1345 6.14043 42.2852 5.73041 41.3188 5.3985C40.6403 6.3015 40.1766 7.21915 39.9277 8.15632C39.6738 9.09349 39.5957 9.93305 39.6885 10.6847C39.7812 11.4364 40.0009 12.1832 40.3474 12.9252C40.694 13.6671 41.0503 14.287 41.4213 14.7751C41.7922 15.2681 42.212 15.7416 42.6855 16.2004C43.1589 16.6592 43.4811 16.9521 43.6617 17.0887C43.8423 17.2205 43.9838 17.3279 44.0912 17.406C44.0912 18.3725 44.0131 19.6708 43.8521 21.2865L43.774 20.9692C43.7056 20.7691 43.6031 20.5055 43.4567 20.1834C43.3103 19.8563 43.1297 19.4854 42.91 19.0705C42.6904 18.6507 42.4121 18.2358 42.0753 17.816C41.7385 17.3962 41.3676 16.9911 40.9625 16.6006C40.5573 16.2101 40.0692 15.8782 39.4981 15.6049C38.927 15.3315 38.3169 15.1363 37.6677 15.0094C37.0185 14.8825 36.2717 14.8776 35.4273 14.9899C34.5828 15.1021 33.6994 15.3462 32.7671 15.7172C32.8452 16.6446 33.0355 17.4939 33.3333 18.2553C33.631 19.0168 33.9922 19.6464 34.4169 20.1394C34.8415 20.6324 35.3394 21.062 35.9105 21.4329C36.4816 21.8039 37.038 22.087 37.5847 22.2774C38.1265 22.4677 38.7171 22.6239 39.3468 22.7362C39.9765 22.8484 40.5182 22.9168 40.9722 22.9363C41.4213 22.9558 41.885 22.9607 42.3536 22.9461C42.8221 22.9314 43.1345 22.9168 43.281 22.8972C43.4274 22.8777 43.5445 22.8582 43.6373 22.8484C43.2907 24.9717 42.7685 26.9046 42.0656 28.6423C41.7337 28.0566 41.3578 27.5148 40.9429 27.0071C40.5231 26.5044 39.9374 25.9919 39.1808 25.4745C38.4243 24.9571 37.5994 24.5812 36.7012 24.3518C35.8031 24.1175 34.6951 24.0687 33.3675 24.2005C32.0398 24.3323 30.6194 24.713 29.1062 25.3378C29.5455 26.4409 30.0385 27.4074 30.5901 28.2469C31.1417 29.0816 31.703 29.7454 32.2741 30.2384C32.8452 30.7314 33.4553 31.1219 34.1045 31.4148C34.7537 31.7076 35.3736 31.8931 35.9544 31.981C36.5402 32.0688 37.1406 32.0835 37.7653 32.0298C38.3901 31.9761 38.9417 31.8882 39.42 31.7711C39.8984 31.6539 40.3767 31.4977 40.8551 31.3123C39.503 33.8065 37.8336 35.7638 35.847 37.1745C33.8604 38.59 31.7225 39.3026 29.4284 39.3173C29.1746 39.3173 28.9647 39.4002 28.7939 39.5662C28.623 39.7322 28.5352 39.9421 28.5352 40.1959C28.5352 40.4497 28.623 40.6596 28.7939 40.8304C28.9647 41.0012 29.1795 41.0891 29.4284 41.0891C32.1862 41.0745 34.739 40.1959 37.082 38.4533C39.4249 36.7059 41.3432 34.3239 42.8465 31.2976L43.1833 31.4977C43.3981 31.6295 43.7007 31.7809 44.101 31.9468C44.5012 32.1128 44.9601 32.2934 45.4824 32.4935C46.0095 32.6936 46.5806 32.8401 47.2054 32.9328C47.8301 33.0255 48.4696 33.0841 49.1285 33.1036C49.7875 33.1232 50.4611 33.0255 51.1493 32.8157C51.8375 32.6058 52.4965 32.2934 53.1213 31.8882C53.746 31.4831 54.3513 30.8974 54.9322 30.1262C55.5179 29.3549 56.0206 28.4422 56.4453 27.3781C55.5667 26.6752 54.6588 26.1627 53.7168 25.8357" fill="#F1874F"></path>
                <path d="M42.8757 79.1275C34.3728 79.1275 26.3727 76.3159 19.7393 70.9955L20.4421 70.1218C26.8705 75.2811 34.6315 78.0097 42.8757 78.0097C51.1199 78.0097 58.8808 75.2811 65.3092 70.1218L66.0121 70.9955C59.3787 76.3159 51.3786 79.1275 42.8757 79.1275Z" fill="#F1874F"></path>
                <path d="M12.6178 63.4104C8.20524 57.148 5.87207 49.7873 5.87207 42.1239C5.87207 32.884 9.29372 24.0395 15.5122 17.2157C21.6868 10.4358 30.0921 6.20879 39.1807 5.30579L39.293 6.41868C30.4826 7.29239 22.3311 11.3925 16.342 17.9674C10.3139 24.5861 6.99472 33.1622 6.99472 42.1239C6.99472 49.5579 9.25468 56.694 13.5354 62.7661L12.6178 63.4104Z" fill="#F1874F"></path>
                <path d="M73.1387 63.4104L72.2211 62.7661C76.4969 56.694 78.7618 49.5578 78.7618 42.1239C78.7618 23.3756 64.1233 7.65845 45.4385 6.34055L45.5166 5.22278C64.7871 6.57972 79.8844 22.7899 79.8844 42.1239C79.8844 49.7872 77.5512 57.1479 73.1387 63.4104Z" fill="#F1874F"></path>
            </svg>
        ),
    },
    {
        icon: (props: any) => (
            <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none" {...props}>
                <path d="M42.6278 84.2478C19.3986 84.2478 0.503906 65.3531 0.503906 42.1239C0.503906 18.8947 19.3986 0 42.6278 0C65.857 0 84.7517 18.8947 84.7517 42.1239C84.7517 65.3531 65.857 84.2478 42.6278 84.2478ZM42.6278 1.46433C20.2089 1.46433 1.96824 19.705 1.96824 42.1239C1.96824 64.5428 20.2089 82.7835 42.6278 82.7835C65.0467 82.7835 83.2874 64.5428 83.2874 42.1239C83.2874 19.705 65.0467 1.46433 42.6278 1.46433Z" fill="#7F1716"></path>
                <path d="M19.0664 47.5761V47.5566C19.0664 45.7555 20.4429 44.3448 22.3123 44.3448C23.5716 44.3448 24.3868 44.872 24.9335 45.6237L23.6449 46.6194C23.2934 46.1899 22.8883 45.897 22.2977 45.897C21.4337 45.897 20.8236 46.639 20.8236 47.5371V47.5566C20.8236 48.484 21.4337 49.2064 22.2977 49.2064C22.942 49.2064 23.3227 48.9087 23.6888 48.4547L24.9774 49.3724C24.3966 50.1729 23.6107 50.7635 22.2537 50.7635C20.4917 50.7635 19.0713 49.4163 19.0713 47.5712L19.0664 47.5761Z" fill="#7F1716"></path>
                <path d="M25.7148 44.4767H27.4232V46.7855H29.6197V44.4767H31.333V50.6513H29.6197V48.3035H27.4232V50.6513H25.7148V44.4767Z" fill="#7F1716"></path>
                <path d="M32.4697 44.4767H34.1781V50.6513H32.4697V44.4767Z" fill="#7F1716"></path>
                <path d="M35.1055 47.5761V47.5566C35.1055 45.7555 36.482 44.3448 38.3514 44.3448C39.6107 44.3448 40.4259 44.872 40.9726 45.6237L39.6839 46.6194C39.3325 46.1899 38.9274 45.897 38.3368 45.897C37.4728 45.897 36.8627 46.639 36.8627 47.5371V47.5566C36.8627 48.484 37.4728 49.2064 38.3368 49.2064C38.9811 49.2064 39.3618 48.9087 39.7279 48.4547L41.0165 49.3724C40.4356 50.1729 39.6498 50.7635 38.2928 50.7635C36.5307 50.7635 35.1104 49.4163 35.1104 47.5712L35.1055 47.5761Z" fill="#7F1716"></path>
                <path d="M41.3828 47.5761V47.5566C41.3828 45.7848 42.813 44.3448 44.7166 44.3448C46.6202 44.3448 48.0309 45.7653 48.0309 47.5371V47.5566C48.0309 49.3284 46.6007 50.7684 44.6971 50.7684C42.7935 50.7684 41.3828 49.348 41.3828 47.5761ZM46.2786 47.5761V47.5566C46.2786 46.6585 45.644 45.8873 44.702 45.8873C43.7599 45.8873 43.1351 46.6439 43.1351 47.5371V47.5566C43.1351 48.4498 43.7794 49.2259 44.7215 49.2259C45.6636 49.2259 46.2835 48.4694 46.2835 47.5761H46.2786Z" fill="#7F1716"></path>
                <path d="M48.9141 44.4767H51.833C52.775 44.4767 53.4291 44.7256 53.844 45.1405C54.2052 45.5017 54.3907 45.9703 54.3907 46.5756V46.5951C54.3907 47.5469 53.8879 48.1717 53.1216 48.4987L54.5957 50.6513H52.6286L51.3839 48.7818H50.6273V50.6513H48.9189V44.4767H48.9141ZM51.7598 47.4395C52.3308 47.4395 52.6774 47.1564 52.6774 46.7074V46.6878C52.6774 46.1948 52.3162 45.9459 51.75 45.9459H50.6224V47.4346H51.7598V47.4395Z" fill="#7F1716"></path>
                <path d="M55.25 44.4766H60.2141V45.9214H56.9437V46.8635H59.9066V48.2107H56.9437V49.1918H60.258V50.6464H55.25V44.4718V44.4766ZM58.0469 42.6267L59.643 43.1099L58.3397 44.052H57.095L58.0469 42.6218V42.6267Z" fill="#7F1716"></path>
                <path d="M61.1416 44.4767H66.1057V45.9215H62.8354V46.8635H65.7982V48.2107H62.8354V49.1918H66.1496V50.6464H61.1416V44.4718V44.4767Z" fill="#7F1716"></path>
                <path d="M20.5117 56.3962V56.3767C20.5117 54.5755 21.8882 53.1649 23.7577 53.1649C25.017 53.1649 25.8321 53.6921 26.3788 54.4438L25.0902 55.4395C24.7388 55.0051 24.3336 54.7171 23.743 54.7171C22.8791 54.7171 22.2689 55.459 22.2689 56.3571V56.3767C22.2689 57.3041 22.8791 58.0265 23.743 58.0265C24.3873 58.0265 24.7681 57.7239 25.139 57.2748L26.4276 58.1924C25.8468 58.9929 25.0609 59.5836 23.704 59.5836C21.9419 59.5836 20.5215 58.2364 20.5215 56.3913L20.5117 56.3962Z" fill="#7F1716"></path>
                <path d="M27.0918 56.7575V53.2919H28.8197V56.7233C28.8197 57.6116 29.2688 58.0363 29.957 58.0363C30.6452 58.0363 31.1041 57.6312 31.1041 56.7672V53.2919H32.8319V56.7135C32.8319 58.7001 31.6947 59.5787 29.9375 59.5787C28.1803 59.5787 27.0869 58.6855 27.0869 56.7575H27.0918Z" fill="#7F1716"></path>
                <path d="M33.8467 53.2919H35.5551V57.968H38.5423V59.4665H33.8418V53.2919H33.8467Z" fill="#7F1716"></path>
                <path d="M39.9193 54.7904H38.0742V53.2919H43.4825V54.7904H41.6325V59.4665H39.9241V54.7904H39.9193Z" fill="#7F1716"></path>
                <path d="M44.2734 53.2919H45.9867V59.4665H44.2734V53.2919Z" fill="#7F1716"></path>
                <path d="M46.6309 53.2919H48.5345L49.9354 57.1968L51.346 53.2919H53.2155L50.7115 59.5104H49.1251L46.6309 53.2919Z" fill="#7F1716"></path>
                <path d="M53.8154 53.2918H58.7795V54.7366H55.5092V55.6787H58.472V57.0259H55.5092V58.0021H58.8234V59.4567H53.8154V53.2821V53.2918ZM56.6123 51.4419L58.2084 51.9251L56.9051 52.8672H55.6605L56.6123 51.437V51.4419Z" fill="#7F1716"></path>
                <path d="M59.707 53.2919H64.6711V54.7367H61.4008V55.6787H64.3636V57.0259H61.4008V58.0021H64.715V59.4567H59.707V53.2821V53.2919Z" fill="#7F1716"></path>
                <path d="M16.4209 62.1071H21.385V63.5519H18.1147V64.494H21.0775V65.8411H18.1147V66.8223H21.4289V68.2768H16.4209V62.1022V62.1071Z" fill="#7F1716"></path>
                <path d="M22.3125 62.1072H23.9086L26.4468 65.3678V62.1072H28.1405V68.2818H26.6518L24.0063 64.8943V68.2818H22.3125V62.1072Z" fill="#7F1716"></path>
                <path d="M31.6738 62.1072H36.6135V63.6057H33.3871V64.6551H36.306V66.0755H33.3871V68.2818H31.6787V62.1072H31.6738Z" fill="#7F1716"></path>
                <path d="M37.3945 62.1072H40.3134C41.2555 62.1072 41.9095 62.3561 42.3244 62.771C42.6856 63.1322 42.8711 63.6008 42.8711 64.2061V64.2256C42.8711 65.1774 42.3684 65.8022 41.602 66.1292L43.0761 68.2818H41.109L39.8644 66.4123H39.1078V68.2818H37.3994V62.1072H37.3945ZM40.2402 65.07C40.8113 65.07 41.1579 64.7869 41.1579 64.3379V64.3183C41.1579 63.8253 40.7967 63.5764 40.2304 63.5764H39.1029V65.0651H40.2402V65.07Z" fill="#7F1716"></path>
                <path d="M45.7657 62.0632H47.4155L50.0415 68.2817H48.2062L47.7669 67.1688H45.3752L44.9359 68.2817H43.1445L45.7657 62.0632ZM47.2642 65.8363L46.576 64.0888L45.878 65.8363H47.2642Z" fill="#7F1716"></path>
                <path d="M50.6416 62.1072H52.2377L54.7759 65.3678V62.1072H56.4696V68.2818H54.9809L52.3353 64.8943V68.2818H50.6416V62.1072Z" fill="#7F1716"></path>
                <path d="M57.3584 65.2115V65.192C57.3584 63.3909 58.7349 61.9802 60.6043 61.9802C61.8637 61.9802 62.6788 62.5074 63.2255 63.2591L61.9369 64.2548C61.5854 63.8253 61.1803 63.5324 60.5897 63.5324C59.7258 63.5324 59.1156 64.2743 59.1156 65.1725V65.192C59.1156 66.1194 59.7258 66.8418 60.5897 66.8418C61.234 66.8418 61.6147 66.544 61.9808 66.0901L63.2694 67.0078C62.6886 67.8083 61.9027 68.3989 60.5458 68.3989C58.7837 68.3989 57.3633 67.0517 57.3633 65.2066L57.3584 65.2115Z" fill="#7F1716"></path>
                <path d="M64.0068 62.1071H68.9709V63.5519H65.7006V64.494H68.6634V65.8411H65.7006V66.8223H69.0148V68.2768H64.0068V62.1022V62.1071Z" fill="#7F1716"></path>
                <path d="M55.3581 16.6397C53.6302 16.5763 52.8102 16.2541 52.6345 15.9954C51.8633 14.8727 50.6772 15.0094 49.4325 14.7947C48.9883 14.7214 48.7052 14.5262 48.6076 14.2382C48.4855 13.877 48.1537 13.633 47.7778 13.633H47.0261C46.4892 13.4768 46.3379 13.1448 46.128 12.5884C45.9132 12.0173 45.6204 11.2363 44.5124 11.0997C43.6679 10.9972 43.3409 10.6018 43.214 10.2894C43.0578 9.90867 42.6673 9.67439 42.2573 9.7232C41.4421 9.81106 40.8954 10.0649 40.583 10.4944C40.0217 11.2705 40.4805 12.2614 40.5196 12.8178C40.5489 13.262 39.6996 13.589 39.4507 13.6574C39.1724 13.7159 37.381 14.1357 36.8978 15.4048C36.6586 16.0345 35.4628 15.8295 34.9796 15.6391C34.9454 15.5708 34.9454 15.3316 35.0479 15.1119C35.126 14.9411 35.1553 14.7605 35.1406 14.5701C35.0967 14.0576 34.6037 13.7062 34.101 13.8282L32.7733 14.1503C32.1436 14.3017 31.9045 15.0826 32.3633 15.5561C32.622 15.8246 32.7782 16.137 32.827 16.4933C32.9051 17.0644 33.1052 17.4549 33.2517 17.7428C33.442 18.1187 33.4469 18.1626 33.3444 18.3432C33.2761 18.4555 32.827 18.3432 32.5292 18.2651C32.0558 18.1431 31.5726 18.0211 31.1479 18.2065C31.0308 18.2602 31.0112 18.27 30.7281 17.8844C30.4304 17.4793 30.0985 17.0009 29.2247 17.0888C28.8733 17.1229 28.5658 17.3035 28.3803 17.5769C28.351 17.6013 28.1411 17.6452 27.653 17.4158C26.9013 17.0595 26.0715 17.1376 25.6762 17.6013C25.4028 17.9234 25.398 18.3579 25.6567 18.7386C25.9446 19.1632 25.5542 19.4756 25.8129 20.1883C26.096 20.9644 27.2332 21.7258 28.8684 21.677C28.9319 21.677 28.9856 21.677 29.0441 21.6819C29.2003 21.7502 29.3614 21.7697 29.5274 21.7453C30.0643 21.8869 30.323 22.1895 30.3913 22.2871C30.611 22.9168 30.8745 23.1413 31.3138 23.4684C31.3675 23.5562 31.4017 23.8686 31.4261 24.1029C31.4847 24.6203 31.553 25.2695 31.8996 25.8601C32.1095 26.2262 32.3877 26.4751 32.6659 26.6899C32.6854 26.7143 32.7001 26.7387 32.7196 26.7582C32.7245 26.7582 33.3688 27.2805 33.7934 28.3788C33.7934 28.3788 33.7983 28.3836 33.8032 28.3885C33.9448 28.7888 34.1644 29.1793 34.3743 29.5551C34.5305 29.8333 34.7745 30.2726 34.8282 30.502C34.7501 30.4435 34.633 30.3361 34.4817 30.1408C34.3108 29.9212 34.0277 29.8285 33.7593 29.9017C33.4908 29.9749 33.3005 30.2043 33.2712 30.4825C33.1003 32.0884 33.3883 32.557 33.3932 32.6741C33.2516 32.8645 32.4853 33.1818 32.5341 34.402C32.5634 35.1293 32.2705 35.7932 32.0216 36.2178C31.758 36.6669 31.8801 37.2331 32.3047 37.5406C33.0515 38.0775 33.73 39.2587 34.6916 39.7908C35.3701 40.1666 36.0827 40.152 36.81 39.7517C37.9082 39.1465 38.2108 39.332 38.6697 39.6199C38.9723 39.8103 39.3481 40.0446 39.9241 40.0788C40.3585 40.1032 40.8222 40.3423 41.2664 40.5717C42.0181 40.9574 42.8723 41.4015 43.6337 40.7377C44.1462 40.2886 44.3562 39.6004 44.239 38.7462C44.2293 38.6828 44.2634 38.6291 44.3269 38.6047C44.7027 38.4631 45.1176 38.1458 45.6008 37.6284C46.1378 37.0525 46.416 37.1501 46.9285 37.3307C47.3775 37.4918 47.9291 37.6919 48.632 37.3649C49.1543 37.1208 49.2665 37.2087 49.6863 37.5455C49.9645 37.7651 50.3062 38.0433 50.848 38.2484C52.0927 38.7218 53.4301 38.0726 53.8206 37.7407C53.845 37.7212 54.4063 37.238 54.9482 36.6473C55.7926 35.7297 56.1147 35.0659 55.9585 34.5534C55.8951 34.3435 55.6949 33.9823 55.0458 33.8993C54.7236 33.8554 54.504 33.748 54.377 33.5674C54.1427 33.2257 54.2453 32.6595 54.299 32.4301C54.3722 32.1323 54.2794 31.8102 54.0646 31.5905C53.9573 31.4831 53.7034 31.2244 54.3087 30.6143C54.6797 30.2385 54.6504 29.6283 54.2355 29.2915C54.0451 29.1402 53.9866 28.9596 54.0451 28.7204C54.172 28.1835 54.094 27.5294 53.8108 26.768C53.5863 26.1676 52.8151 25.9968 52.3514 26.4458C51.7608 27.0267 51.3215 27.0462 51.6534 26.3824C51.8194 26.0505 52.1171 25.6649 52.4051 25.2939C52.8493 24.7228 53.1958 24.2689 53.2349 23.8491C53.2935 23.1902 53.557 22.7801 53.7132 22.7509L53.7572 22.7411C54.2062 22.6581 55.3972 22.4385 55.3435 20.7545C55.3435 20.7252 55.3289 20.7008 55.324 20.6764C55.2605 19.5781 55.6657 18.8753 55.6754 18.8557C55.6754 18.846 55.6754 18.8411 55.6852 18.8313C55.6901 18.8167 55.7047 18.8069 55.7096 18.7923C55.8219 18.5043 55.9634 18.2065 56.1147 17.9088C56.4125 17.3328 56.0122 16.6446 55.363 16.6202" fill="#F1874F"></path>
                <path d="M72.8856 63.4104L71.968 62.766C76.2487 56.694 78.5086 49.5578 78.5086 42.1239C78.5086 22.3359 62.4107 6.2429 42.6276 6.2429C22.8445 6.2429 6.7467 22.3408 6.7467 42.1239C6.7467 49.5578 9.00663 56.694 13.2874 62.766L12.3697 63.4104C7.95719 57.1479 5.62402 49.7872 5.62402 42.1239C5.62402 21.7209 22.2246 5.12024 42.6276 5.12024C63.0306 5.12024 79.6313 21.7209 79.6313 42.1239C79.6313 49.7921 77.2981 57.1528 72.8856 63.4104Z" fill="#F1874F"></path>
                <path d="M42.6276 79.1275C34.1247 79.1275 26.1246 76.3159 19.4912 70.9955L20.1941 70.1218C26.6225 75.2811 34.3834 78.0097 42.6276 78.0097C50.8718 78.0097 58.6328 75.2811 65.0612 70.1218L65.764 70.9955C59.1306 76.3159 51.1305 79.1275 42.6276 79.1275Z" fill="#F1874F"></path>
            </svg>
        ),
    },
    {
        icon: (props: any) => (
            <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none" {...props}>
                <path d="M42.8681 79.1275C30.5531 79.1275 19.0777 73.0261 12.1758 62.8002L13.1032 62.1754C19.7952 72.0889 30.9241 78.0097 42.8681 78.0097C54.8122 78.0097 65.9411 72.0889 72.6331 62.1754L73.5605 62.8002C66.6586 73.0212 55.188 79.1275 42.8681 79.1275ZM72.4525 21.8185C65.7459 12.066 54.6853 6.23801 42.8681 6.23801C31.051 6.23801 19.9953 12.0612 13.2838 21.8185L12.3613 21.1839C19.2778 11.124 30.68 5.12024 42.8681 5.12024C55.0562 5.12024 66.4585 11.124 73.375 21.1839L72.4525 21.8185Z" fill="#F1874F"></path>
                <path d="M42.868 84.2478C19.6389 84.2478 0.744141 65.3531 0.744141 42.1239C0.744141 18.8947 19.6389 0 42.868 0C66.0972 0 84.9919 18.8947 84.9919 42.1239C84.9919 65.3531 66.0972 84.2478 42.868 84.2478ZM42.868 1.46433C20.4491 1.46433 2.20847 19.705 2.20847 42.1239C2.20847 64.5428 20.4491 82.7835 42.868 82.7835C65.2869 82.7835 83.5276 64.5428 83.5276 42.1239C83.5276 19.705 65.2869 1.46433 42.868 1.46433Z" fill="#7F1716"></path>
                <path d="M14.948 29.4183L12.2536 30.0577L11.4092 26.6361L16.0853 25.3133H19.3019V41.4014H14.9431V29.4183H14.948Z" fill="#7F1716"></path>
                <path d="M21.791 33.455V33.411C21.791 28.8911 24.666 25.1034 29.2054 25.1034C33.7448 25.1034 36.5759 28.8472 36.5759 33.3622V33.4061C36.5759 37.926 33.7253 41.7138 29.1615 41.7138C24.5977 41.7138 21.791 37.97 21.791 33.455ZM32.1292 33.455V33.411C32.1292 30.8533 30.9431 29.0083 29.1615 29.0083C27.3799 29.0083 26.2426 30.8094 26.2426 33.3671V33.411C26.2426 35.9687 27.4287 37.7943 29.2103 37.7943C30.9919 37.7943 32.1292 35.9931 32.1292 33.4598V33.455Z" fill="#7F1716"></path>
                <path d="M38.4502 33.455V33.4111C38.4502 28.8912 41.3252 25.1035 45.8646 25.1035C50.404 25.1035 53.2351 28.8473 53.2351 33.3623V33.4062C53.2351 37.9261 50.3845 41.7138 45.8207 41.7138C41.2568 41.7138 38.4502 37.97 38.4502 33.455ZM48.7884 33.455V33.4111C48.7884 30.8534 47.6023 29.0083 45.8207 29.0083C44.0391 29.0083 42.9018 30.8095 42.9018 33.3672V33.4111C42.9018 35.9688 44.0879 37.7943 45.8695 37.7943C47.6511 37.7943 48.7884 35.9932 48.7884 33.4599V33.455Z" fill="#7F1716"></path>
                <path d="M54.9727 29.5306V29.4867C54.9727 27.134 56.6176 25.1962 59.1021 25.1962C61.5865 25.1962 63.212 27.1144 63.212 29.4622V29.5062C63.212 31.8345 61.5475 33.7723 59.0825 33.7723C56.6176 33.7723 54.9727 31.854 54.9727 29.5257V29.5306ZM69.0546 25.4207H72.1346L65.3352 34.1139L59.8147 41.3917H56.7347L63.4658 32.7863L69.0546 25.4158V25.4207ZM57.7598 29.4622V29.5062C57.7598 30.5117 58.3553 31.2878 59.1069 31.2878C59.8586 31.2878 60.4297 30.5361 60.4297 29.5306V29.4867C60.4297 28.4616 59.8586 27.6855 59.0825 27.6855C58.3064 27.6855 57.7598 28.4372 57.7598 29.4671V29.4622ZM65.6574 37.3599V37.3159C65.6574 34.9633 67.2779 33.0254 69.7868 33.0254C72.2957 33.0254 73.8967 34.9437 73.8967 37.2915V37.3355C73.8967 39.6637 72.2322 41.626 69.7673 41.626C67.3023 41.626 65.6574 39.6882 65.6574 37.3599ZM71.1096 37.3599V37.3159C71.1096 36.2909 70.5385 35.5148 69.7624 35.5148C68.9424 35.5148 68.4396 36.2665 68.4396 37.2964V37.3403C68.4396 38.3458 69.0351 39.1219 69.7868 39.1219C70.5385 39.1219 71.1096 38.3703 71.1096 37.3647V37.3599Z" fill="#7F1716"></path>
                <path d="M14.2646 43.7982H17.1689C19.8389 43.7982 21.391 45.3406 21.391 47.5079V47.5274C21.391 49.6946 19.8145 51.3005 17.125 51.3005H14.2646V43.7982ZM16.344 45.6286V49.4554H17.1884C18.4429 49.4554 19.2678 48.7672 19.2678 47.5567V47.5371C19.2678 46.3364 18.4429 45.6286 17.1884 45.6286H16.344Z" fill="#7F1716"></path>
                <path d="M22.0645 46.8977C22.782 46.8099 23.1578 46.4682 23.1383 45.8922H22.3134V43.8031H24.4269V45.5066C24.4269 47.093 23.5678 47.6396 22.2304 47.6836L22.0693 46.9026L22.0645 46.8977Z" fill="#7F1716"></path>
                <path d="M25.2715 47.5713V47.5517C25.2715 45.3992 27.0092 43.6517 29.3228 43.6517C31.6364 43.6517 33.3546 45.3796 33.3546 47.5322V47.5517C33.3546 49.7043 31.6169 51.4517 29.3033 51.4517C26.9896 51.4517 25.2715 49.7238 25.2715 47.5713ZM31.2215 47.5713V47.5517C31.2215 46.4584 30.4503 45.5261 29.3033 45.5261C28.1562 45.5261 27.3948 46.4486 27.3948 47.5322V47.5517C27.3948 48.6353 28.1757 49.5774 29.3228 49.5774C30.4699 49.5774 31.2215 48.6549 31.2215 47.5713Z" fill="#7F1716"></path>
                <path d="M34.4238 43.7982H37.9724C39.1194 43.7982 39.9102 44.096 40.4178 44.6036C40.8571 45.0429 41.0817 45.6091 41.0817 46.351V46.3706C41.0817 47.5274 40.4715 48.2888 39.5392 48.6842L41.3306 51.3005H38.9388L37.4257 49.0308H36.5032V51.3005H34.4238V43.7982ZM37.8845 47.4005C38.5825 47.4005 38.9974 47.0588 38.9974 46.5121V46.4926C38.9974 45.8922 38.5581 45.5945 37.8699 45.5945H36.4983V47.4054H37.8796L37.8845 47.4005Z" fill="#7F1716"></path>
                <path d="M42.1797 43.7982H44.259V51.3005H42.1797V43.7982Z" fill="#7F1716"></path>
                <path d="M45.3867 47.5713V47.5517C45.3867 45.365 47.1 43.6517 49.4185 43.6517C50.7364 43.6517 51.6687 44.0471 52.4643 44.7353L51.244 46.2143C50.7071 45.7653 50.1848 45.5066 49.4332 45.5066C48.3496 45.5066 47.5149 46.4047 47.5149 47.5517V47.5713C47.5149 48.7915 48.3593 49.6604 49.5503 49.6604C50.0628 49.6604 50.4484 49.553 50.7511 49.348V48.4352H49.2818V46.9123H52.723V50.2754C51.9323 50.9392 50.8389 51.442 49.4673 51.442C47.1293 51.442 45.3965 49.8361 45.3965 47.5615L45.3867 47.5713Z" fill="#7F1716"></path>
                <path d="M53.9287 43.7982H56.0081V51.3005H53.9287V43.7982Z" fill="#7F1716"></path>
                <path d="M57.3799 43.7982H59.3177L62.4025 47.7617V43.7982H64.4624V51.3005H62.6515L59.4348 47.1857V51.3005H57.375V43.7982H57.3799Z" fill="#7F1716"></path>
                <path d="M65.79 43.7982H71.8231V45.5554H67.845V46.7025H71.4472V48.3425H67.845V49.5335H71.8768V51.3005H65.79V43.7982Z" fill="#7F1716"></path>
                <path d="M14.6699 53.4334H16.3539L19.0336 56.8795V53.4334H20.8201V59.9497H19.2484L16.4564 56.3767V59.9497H14.6699V53.4334Z" fill="#7F1716"></path>
                <path d="M24.2324 53.3846H25.975L28.7474 59.9497H26.8097L26.346 58.7782H23.8224L23.3587 59.9497H21.4697L24.2373 53.3846H24.2324ZM25.8139 57.3676L25.0866 55.5225L24.3496 57.3676H25.809H25.8139Z" fill="#7F1716"></path>
                <path d="M30.1331 55.0149H28.1855V53.4334H33.8916V55.0149H31.9342V59.9497H30.1282V55.0149H30.1331Z" fill="#7F1716"></path>
                <path d="M34.6143 57.0942V53.4334H36.4398V57.0552C36.4398 57.9972 36.9132 58.4414 37.6405 58.4414C38.3678 58.4414 38.851 58.0119 38.851 57.0991V53.4285H40.6766V57.0405C40.6766 59.1345 39.4758 60.0668 37.621 60.0668C35.7662 60.0668 34.6143 59.1248 34.6143 57.0894V57.0942Z" fill="#7F1716"></path>
                <path d="M41.7451 53.4334H44.8251C45.8208 53.4334 46.5091 53.6921 46.9484 54.1314C47.3291 54.5121 47.5243 55.0051 47.5243 55.6494V55.669C47.5243 56.6745 46.9923 57.3334 46.182 57.68L47.7391 59.9497H45.6646L44.3516 57.9777H43.5511V59.9497H41.7451V53.4334ZM44.7519 56.5622C45.3571 56.5622 45.7183 56.2644 45.7183 55.791V55.7715C45.7183 55.2492 45.3376 54.9905 44.7421 54.9905H43.5511V56.5622H44.7519Z" fill="#7F1716"></path>
                <path d="M48.4375 53.4334H53.6798V54.9612H50.224V55.9569H53.3528V57.3822H50.224V58.417H53.7237V59.9546H48.4375V53.4383V53.4334Z" fill="#7F1716"></path>
                <path d="M54.6611 53.4334H56.4671V58.3682H59.6252V59.9497H54.6611V53.4334Z" fill="#7F1716"></path>
                <path d="M60.4062 53.4334H62.2122V58.3682H65.3703V59.9497H60.4062V53.4334Z" fill="#7F1716"></path>
                <path d="M66.1465 53.4334H71.3888V54.9612H67.933V55.9569H71.0618V57.3822H67.933V58.417H71.4327V59.9546H66.1465V53.4383V53.4334Z" fill="#7F1716"></path>
                <path d="M40.2026 15.7562C40.6468 15.2046 41.0861 14.7604 41.5303 14.4285C42.36 13.711 43.0776 13.4328 43.0776 13.4328C43.0776 13.4328 42.692 14.0429 42.0818 14.9264C41.9696 15.146 41.8036 15.3706 41.6376 15.6439C41.4717 15.8636 41.3594 16.1418 41.1935 16.42C41.0275 16.6982 40.9152 16.9716 40.7493 17.2498C40.637 17.528 40.4174 17.8599 40.3051 18.1382C40.1928 18.4164 40.0269 18.7483 39.9195 19.0216C39.8658 19.1339 39.8072 19.2999 39.7535 19.4072C41.5791 20.4567 44.0147 20.237 45.5084 18.6312C48.2759 15.6439 45.8403 14.3699 48.3882 9.10812C48.3882 9.10812 42.7408 7.94642 38.6992 11.9294C36.8737 13.7549 36.8737 16.6885 38.6992 18.5726C38.8115 18.2407 38.9189 17.9087 39.0848 17.5768C39.363 16.913 39.7487 16.2492 40.1928 15.7513" fill="#F1874F"></path>
                <path d="M45.5323 66.4122C45.0881 66.9638 44.6439 67.408 44.2046 67.7399C43.3748 68.4574 42.6573 68.7356 42.6573 68.7356C42.6573 68.7356 43.0429 68.1255 43.6531 67.242C43.7653 67.0224 43.9313 66.7978 44.0973 66.5245C44.2632 66.3048 44.3755 66.0266 44.5414 65.7484C44.7074 65.4702 44.8197 65.1968 44.9856 64.9186C45.0979 64.6404 45.3175 64.3085 45.4298 64.0302C45.542 63.752 45.708 63.4201 45.8154 63.1468C45.8691 63.0345 45.9277 62.8685 45.9813 62.7611C44.1558 61.7117 41.7202 61.9314 40.2265 63.5372C37.459 66.5245 39.8946 67.7984 37.3467 73.0603C37.3467 73.0603 42.9941 74.222 47.0357 70.239C48.8612 68.4135 48.8612 65.4799 47.0357 63.5958C46.9234 63.9277 46.816 64.2596 46.6501 64.5916C46.3718 65.2554 45.9862 65.9192 45.5421 66.4171" fill="#F1874F"></path>
            </svg>
        ),
    },
]