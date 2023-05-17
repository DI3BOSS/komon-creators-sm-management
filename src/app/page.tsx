import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import instagramAccount from "@/data/instagramAccount";

const Home = (): React.JSX.Element => {
  const { networkIcon, networkTitle, username, avatar, postList } =
    instagramAccount;
  return (
    <>
      <Header />
      <main className="p-20">
        <SocialMedia
          networkIcon={networkIcon}
          networkTitle={networkTitle}
          avatar={avatar}
          username={username}
          key={username}
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;
