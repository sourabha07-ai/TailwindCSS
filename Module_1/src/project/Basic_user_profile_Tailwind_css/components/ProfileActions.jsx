function ProfileActions({ onEditProfile, onViewPortfolio }) {
   return (

    <div className="flex gap-3 px-2">

      <button

        className="flex-1 px-6 py-3 border border-solid text-base"

        onClick={onEditProfile}

      >

        Edit Profile

      </button>

      <button

        className="flex-1 px-6 py-3 border border-solid text-base"

        onClick={onViewPortfolio}

      >

        View Portfolio

      </button>

    </div>

  );
}

export default ProfileActions;
