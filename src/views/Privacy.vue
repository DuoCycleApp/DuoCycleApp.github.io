<template>
  <div class="privacy">
    <div>
      <img src="../assets/privacy.png" alt="A rider whose privacy is respected" />
    </div>
    <div class="privacy-desc">
      <h1>Privacy</h1>
      <p>
        <strong>DuoCycle does not collect any information about you, period.</strong>
      </p>

      <p>
        We believe that your workouts and workout habits are highly personal
        information that you shouldn't have to share if you don't want to.
      </p>

      <p>
        This is why DuoCycle tightly integrates with Apple's Health app where you
        have full control over what workout data is saved and who has access to
        it. DuoCycle goes even so far as that it has
        <strong>no other persistence layer than Health</strong>. That means that
        if you decide to delete a workout in Health, it is also gone in DuoCycle,
        just as if it never existed.
      </p>

      <p>
        To ensure the smooth functionality of DuoCycle, it relies on a few
        temporary files which are saved to your device but neither leave it nor
        get further processed:
      </p>

      <p>
        During a workout, DuoCycle stores snapshots of your currently aggregated
        workout data to the disk every 30 seconds on both iPhone and Apple Watch.
        This has the purpose of restoring your workout data after an app crash.
        Therefore, if an app crashes, you still have your heart rate-, speed- and
        altitude samples, as well as your travelled route with you. Again, these
        samples are not processed otherwise and do not leave your device. Those
        temporary files are deleted after each workout as well.
      </p>

      <p>
        After a workout has finished, you can see your workouts on the Home screen
        of the app. Most prominently, you can see images of map snapshots with
        your travelled routes on them. These images are generated for each workout
        and saved to disk. Again, these map snapshots are not further processed,
        nor do they leave your device.
      </p>

      <p>
        When you tap on a workout on the Home screen, you are provided details
        about your workout. You also have the opportunity to export your workout
        to the popular GPX format. To generate the workout, a temporary GPX file
        is generated, which you are free to save and to share as you please. The
        temporary file is not further processed and gets deleted automatically by
        iOS.
      </p>

      <p>
        You also have the opportunity to share your workout to STRAVA®. To achieve
        this, you have to log into your STRAVA® account during the process and
        authorize DuoCycle to post workouts to your STRAVA® account.
        Authentication and authorization are achieved with the secure and widely
        adopted
        <a
          href="https://oauth.net/2/"
        >OAuth 2.0</a> protocol. DuoCycle
        has no means to obtain your STRAVA® password. Instead, STRAVA® provides
        DuoCycle with so called access- and refresh-tokens so that it can post
        workouts on your behalf. In your STRAVA® account, you can revoke these
        tokens at any time and restrict DuoCycle's access. For convenience,
        DuoCycle saves these tokens to the iOS Keychain, so you don't have to
        authenticate every time you upload a workout. Items in the Keychain are
        securely encrypted. The workouts that you can upload to STRAVA® are the
        same temporary GPX files that you can export on your own and are thus
        deleted after the upload. For more information about how STRAVA® handles
        your uploaded workouts, please refer to
        <a
          href="https://www.strava.com/legal/privacy"
        >STRAVA®'s Privacy Policy</a>.
      </p>

      <p>
        Beyond the information Apple provides to developers that you can decide to
        provide, DuoCycle uses no third-party analytics frameworks.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "privacy"
};
</script>

<style>
.privacy {
  text-align: left;
  display: flex;
  justify-content: space-evenly;
}

.privacy-desc {
  width: 60vw;
}

h1 {
  margin-top: 0;
}

p {
  font-family: "Helvetica Neue";
}

a {
  color: red;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  max-height: 100%;
}
</style>