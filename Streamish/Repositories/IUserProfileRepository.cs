using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Streamish.Models;

namespace Streamish.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        void Delete(int id);
        List<UserProfile> GetAllUserProfiles();
        UserProfile GetUserProfileById(int id);
        UserProfile GetUserWithVideos(int id);
        void Update(UserProfile userProfile);
    }
}
